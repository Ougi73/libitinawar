const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Collection, StringSelectMenuBuilder, MessageFlags } = require('discord.js');
const { factionsData } = require('./rolesData.js');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class GameManager {
    constructor() {
        this.resetGame();
    }

    resetGame() {
        console.log("GAME MANAGER: O estado do jogo foi completamente resetado.");
        this.isActive = false;
        this.hostUser = null; // Armazenará o objeto de usuário do host
        this.guild = null;
        this.channel = null;
        this.lobbyMessage = null;
        if (this.collector) this.collector.stop();
        this.collector = null;
        this.lobby = new Collection();
        this.players = new Collection();
        this.phase = 'none';
    }

    isGameActive() {
        return this.isActive;
    }

    async createLobby(interaction) {
        this.isActive = true;
        this.hostUser = interaction.user; // <<-- MUDANÇA IMPORTANTE: Salvando o objeto do usuário do host
        this.guild = interaction.guild;
        this.channel = interaction.channel;
        this.phase = 'lobby';

        // --- CONTROLE DE AUTO-JOIN ---
        // Se você, como Mestre, NÃO joga, comente ou remova a linha abaixo.
        // Se você joga, deixe como está.

        const lobbyEmbed = this.createLobbyEmbed();
        const row = this.createLobbyButtons();
        
        // SINTAXE ATUALIZADA: Removido 'fetchReply', vamos buscar a resposta depois.
        await interaction.reply({ 
            embeds: [lobbyEmbed], 
            components: [row],
        });
        this.lobbyMessage = await interaction.fetchReply(); // Buscando a resposta na linha seguinte.
        this.setupLobbyCollector();
    }

    createLobbyEmbed() {
        const playerList = Array.from(this.lobby.values()).map(user => `<@${user.id}>`).join('\n') || 'Ninguém ainda...';
        return new EmbedBuilder()
            .setColor(0x5865F2)
            .setTitle('🔥 Uma Nova Partida de Guerra Civil Está se Formando!')
            .setDescription('Clique no botão "Entrar/Sair" para participar. O anfitrião iniciará o jogo quando todos estiverem prontos.')
            .addFields({ name: `Jogadores no Lobby (${this.lobby.size})`, value: playerList })
            // CORREÇÃO DO ERRO: Usando o this.hostUser que é estável.
            .setFooter({ text: `Partida organizada por: ${this.hostUser.username}` });
    }

    createLobbyButtons(disableAll = false) {
        return new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('join_game').setLabel('Entrar/Sair').setStyle(ButtonStyle.Primary).setEmoji('⚔️').setDisabled(disableAll),
            new ButtonBuilder().setCustomId('start_game_selection').setLabel('Iniciar Jogo').setStyle(ButtonStyle.Success).setEmoji('✅').setDisabled(disableAll),
            new ButtonBuilder().setCustomId('cancel_game').setLabel('Cancelar Partida').setStyle(ButtonStyle.Danger).setEmoji('✖️').setDisabled(disableAll)
        );
    }

    setupLobbyCollector() {
        this.collector = this.lobbyMessage.createMessageComponentCollector({ time: 86400_000 });

        this.collector.on('collect', async i => {
            // Permissão para botões do host
            if ((i.customId === 'start_game_selection' || i.customId === 'cancel_game') && i.user.id !== this.hostUser.id) {
                // SINTAXE ATUALIZADA: Usando 'flags' em vez de 'ephemeral'
                return i.reply({ content: 'Apenas o organizador da partida pode usar este botão.', flags: [MessageFlags.Ephemeral] });
            }

            switch (i.customId) {
                case 'join_game':
                    if (this.lobby.has(i.user.id)) {
                        this.lobby.delete(i.user.id);
                        await i.reply({ content: 'Você saiu do lobby.', flags: [MessageFlags.Ephemeral] });
                    } else {
                        this.lobby.set(i.user.id, i.user);
                        await i.reply({ content: 'Você entrou no lobby!', flags: [MessageFlags.Ephemeral] });
                    }
                    // A correção do erro de 'username' previne a falha aqui.
                    await i.message.edit({ embeds: [this.createLobbyEmbed()] });
                    break;
                case 'start_game_selection':
                    await this.presentRoleSelection(i);
                    break;
                case 'cancel_game':
                    await i.update({ content: 'A partida foi cancelada pelo organizador.', embeds: [], components: [] });
                    this.resetGame();
                    break;
            }
        });
    }

    async presentRoleSelection(interaction) {
        // ... (resto desta função e das outras continua igual, mas vou colar tudo por segurança)
        if (this.lobby.size < 1) {
            return interaction.reply({ content: "Não há jogadores suficientes para iniciar.", flags: [MessageFlags.Ephemeral] });
        }
        
        await this.lobbyMessage.edit({ components: [this.createLobbyButtons(true)] });
        this.collector.stop();

        const allRolesOptions = [];
        for (const factionKey in factionsData) {
            const faction = factionsData[factionKey];
            allRolesOptions.push(...faction.characters.map(char => ({
                label: char.name, value: `${factionKey}|${char.name}`,
                description: `Facção: ${faction.name}`, emoji: faction.emoji
            })));
        }

        const numberOfPlayers = this.lobby.size;
        const selectionComponents = [];
        const chunkSize = 25;
        for (let i = 0; i < allRolesOptions.length; i += chunkSize) {
            const chunk = allRolesOptions.slice(i, i + chunkSize);
            selectionComponents.push(new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId(`role_select_menu_${i}`)
                    .setPlaceholder(`Selecione os papéis (${i + 1}-${i + chunk.length})`)
                    .setMinValues(0).setMaxValues(chunk.length).addOptions(chunk)
            ));
        }
        
        selectionComponents.push(new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('confirm_roles').setLabel('Confirmar Papéis').setStyle(ButtonStyle.Success)
        ));

        const selectionMessage = await interaction.reply({
            content: `Mestre, selecione exatamente **${numberOfPlayers}** papéis e clique em 'Confirmar'.`,
            components: selectionComponents, flags: [MessageFlags.Ephemeral]
        });

        this.setupRoleSelectionCollector(await interaction.fetchReply(), numberOfPlayers);
    }
    
    setupRoleSelectionCollector(message, requiredCount) {
        const roleCollector = message.createMessageComponentCollector({ time: 600_000 });
        const selectedValues = new Map();

        roleCollector.on('collect', async i => {
            if (i.isStringSelectMenu()) {
                selectedValues.set(i.customId, i.values);
                let totalSelected = 0;
                selectedValues.forEach(values => totalSelected += values.length);
                await i.update({ content: `Selecionados ${totalSelected} de ${requiredCount} papéis. Continue selecionando ou confirme.` });
            }

            if (i.isButton() && i.customId === 'confirm_roles') {
                let finalSelection = [];
                selectedValues.forEach(values => finalSelection.push(...values));

                if (finalSelection.length !== requiredCount) {
                    return i.update({ content: `⚠️ **Erro:** Você selecionou **${finalSelection.length}** papéis, mas precisa selecionar exatamente **${requiredCount}**. Tente novamente.` });
                }
                
                roleCollector.stop();
                await this.distributeRoles(i, finalSelection);
            }
        });
    }

    async distributeRoles(interaction, selectedRoleIdentifiers) {
        await interaction.update({ content: '✅ Papéis confirmados! Distribuindo para os jogadores por DM...', components: [] });

        const playersToAssign = Array.from(this.lobby.values());
        let selectedRoles = selectedRoleIdentifiers.map(id => {
            const [factionKey, charName] = id.split('|');
            const faction = factionsData[factionKey];
            const character = faction.characters.find(c => c.name === charName);
            return {...character, faction: faction};
        });

        shuffleArray(playersToAssign);
        shuffleArray(selectedRoles);

        const hostSummary = ['**Distribuição de Papéis:**'];
        for (const user of playersToAssign) {
            const assignedRole = selectedRoles.shift();
            const faction = assignedRole.faction;
            this.players.set(user.id, { user, role: assignedRole, faction, isAlive: true });
            hostSummary.push(`- **${user.username}**: ${assignedRole.name} (${faction.name})`);

            const roleEmbed = new EmbedBuilder()
                .setColor(faction.color).setTitle(`${faction.emoji} Você é: ${assignedRole.name}`)
                .setDescription(`Sua facção é **${faction.name}**.`)
                .setImage(assignedRole.image.includes('placeholder') ? null : assignedRole.image);
            assignedRole.abilities.forEach(ability => {
                roleEmbed.addFields({ name: ability.name, value: ability.value.substring(0, 1024) });
            });
            
            try { await user.send({ embeds: [roleEmbed] }); } catch (error) {
                console.error(`Não foi possível enviar DM para ${user.username}.`);
                await this.channel.send(`⚠️ Não foi possível enviar a DM com o papel para <@${user.id}>.`);
            }
        }
        
        const startEmbed = new EmbedBuilder().setColor(0x2ECC71).setTitle('✅ Partida Iniciada!').setDescription('Os papéis foram distribuídos secretamente por DM. Que comecem os jogos!');
        await this.lobbyMessage.edit({ embeds: [startEmbed], components: [] });

        await this.guild.members.cache.get(this.hostUser.id).send({ content: hostSummary.join('\n') });
        this.phase = 'running';
        console.log("Partida iniciada. Papéis distribuídos.");
    }

    async endGame(interaction) {
        if (!this.isActive) {
            return interaction.reply({ content: 'Não há nenhuma partida em andamento para encerrar.', flags: [MessageFlags.Ephemeral] });
        }
        const endEmbed = new EmbedBuilder().setColor(0xE74C3C).setTitle('✖️ Partida Encerrada').setDescription('A partida foi encerrada pelo administrador.');
        if (this.lobbyMessage) {
            await this.lobbyMessage.edit({ embeds: [endEmbed], components: [this.createLobbyButtons(true)] }).catch(() => {});
        }
        await interaction.reply({ content: 'A partida foi encerrada com sucesso.', flags: [MessageFlags.Ephemeral] });
        this.resetGame();
    }

    killPlayer(targetUserId) {
        if (this.phase !== 'running') {
            return { success: false, reason: 'A partida ainda não começou!' };
        }
        if (!this.players.has(targetUserId)) {
            return { success: false, reason: 'Este usuário não está na partida atual.' };
        }
        const playerData = this.players.get(targetUserId);
        if (!playerData.isAlive) {
            return { success: false, reason: 'Este jogador já está morto.' };
        }
        playerData.isAlive = false;
        console.log(`MESTRE: O jogador ${playerData.user.username} foi morto.`);
        return { success: true, user: playerData.user, role: playerData.role };
    }
}

const gameManager = new GameManager();
module.exports = gameManager;