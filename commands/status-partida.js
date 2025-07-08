const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const gameManager = require('../GameManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status-partida')
        .setDescription('Mostra o status da partida atual.'),

    async execute(interaction) {
        if (!gameManager.isGameActive()) {
            return interaction.reply({ content: 'Não há nenhuma partida em andamento.', flags: [MessageFlags.Ephemeral] });
        }

        // Se o jogo ainda estiver no lobby, mostra os jogadores no lobby
        if (gameManager.phase === 'lobby') {
            const playerList = Array.from(gameManager.lobby.values()).map(user => `<@${user.id}>`).join('\n');
            const lobbyStatusEmbed = new EmbedBuilder()
                .setColor(0x3498DB)
                .setTitle('Status da Partida:  Lobby  Lobby')
                .setDescription(`A partida está na fase de lobby, aguardando o início.`)
                .addFields({ name: `Jogadores no Lobby (${gameManager.lobby.size})`, value: playerList || 'Ninguém ainda...' })
                .setFooter({ text: `Anfitrião: ${gameManager.hostUser.username}`}); // Usa a informação salva do host
            return interaction.reply({ embeds: [lobbyStatusEmbed] });
        }
        
        // Se o jogo já começou, mostra vivos e mortos
        const alivePlayers = [];
        const deadPlayers = [];

        for (const player of gameManager.players.values()) {
            if (player.isAlive) {
                alivePlayers.push(`<@${player.user.id}>`);
            } else {
                // Adiciona o papel ao lado do jogador morto
                deadPlayers.push(`~~<@${player.user.id}>~~ (${player.role.name})`);
            }
        }
        
        const statusEmbed = new EmbedBuilder()
            .setColor(0x2ECC71)
            .setTitle('Status da Partida Atual')
            .addFields(
                { name: `Jogadores Vivos (${alivePlayers.length})`, value: alivePlayers.join('\n') || 'Ninguém', inline: true },
                { name: `Jogadores Mortos (${deadPlayers.length})`, value: deadPlayers.join('\n') || 'Ninguém', inline: true }
            )
            // ↓↓↓ ESTA É A LINHA CORRIGIDA ↓↓↓
            .setFooter({ text: `Anfitrião: ${gameManager.hostUser.username}` });
            
        await interaction.reply({ embeds: [statusEmbed] });
    }
};