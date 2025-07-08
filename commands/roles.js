const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, ComponentType, MessageFlags } = require('discord.js');
const { factionsData } = require('../rolesData.js');

function createCharacterEmbed(character, factionColor) {
    const characterEmbed = new EmbedBuilder()
        .setColor(factionColor)
        .setTitle(`${factionsData[Object.keys(factionsData).find(key => factionsData[key].characters.includes(character))].emoji} ${character.name}`)
        .setImage(character.image.includes('placeholder') ? null : character.image);

    for (const ability of character.abilities) {
        const value = ability.value.length > 1024 ? ability.value.substring(0, 1021) + '...' : ability.value;
        characterEmbed.addFields({ name: ability.name, value: value });
    }
    return characterEmbed;
}

function createFactionSelection() {
    const initialEmbed = new EmbedBuilder()
        .setColor(0x5865F2)
        .setTitle('Catálogo de Personagens')
        .setDescription('Use o menu abaixo para selecionar uma facção e explorar seus membros.');

    const factionSelectMenu = new StringSelectMenuBuilder()
        .setCustomId('select_faction')
        .setPlaceholder('Escolha uma facção...');

    for (const factionKey in factionsData) {
        const faction = factionsData[factionKey];
        factionSelectMenu.addOptions({
            label: faction.name,
            description: `Veja os personagens da facção ${faction.name}.`,
            value: factionKey,
            emoji: faction.emoji,
        });
    }

    const row = new ActionRowBuilder().addComponents(factionSelectMenu);
    return { embeds: [initialEmbed], components: [row] };
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Explore as facções e personagens do jogo.'),

    async execute(interaction) {
        // --- MUDANÇA PRINCIPAL AQUI ---
        // 1. Responda imediatamente que o bot está "pensando".
        // Isso evita o erro de "Unknown Interaction" e já corrige o aviso do "ephemeral".
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });

        const initialScreen = createFactionSelection();
        
        // 2. Use "editReply" para enviar a primeira mensagem, em vez de "reply".
        await interaction.editReply({ ...initialScreen });
        
        // O coletor precisa ser criado no canal da interação, já que não temos mais um objeto de "resposta" direto
        const collector = interaction.channel.createMessageComponentCollector({
            filter: i => i.user.id === interaction.user.id,
            time: 300_000
        });

        collector.on('collect', async i => {
            if (i.customId === 'roles_back_to_factions') {
                const factionScreen = createFactionSelection();
                await i.update({ ...factionScreen });
                return;
            }

            if (i.isStringSelectMenu()) {
                const selectedValue = i.values[0];

                if (i.customId === 'select_faction') {
                    const factionKey = selectedValue;
                    const faction = factionsData[factionKey];
                    const firstCharacter = faction.characters[0];
                    const characterEmbed = createCharacterEmbed(firstCharacter, faction.color);
                    const characterSelectMenu = new StringSelectMenuBuilder()
                        .setCustomId(`select_character_${factionKey}`)
                        .setPlaceholder('Escolha um personagem para ver os detalhes...');
                    faction.characters.forEach((char, index) => {
                        characterSelectMenu.addOptions({ label: char.name, value: index.toString() });
                    });
                    const characterRow = new ActionRowBuilder().addComponents(characterSelectMenu);
                    const buttonRow = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('roles_back_to_factions').setLabel('Voltar para Facções').setStyle(ButtonStyle.Secondary).setEmoji('⬅️'),
                        new ButtonBuilder().setLabel('História dos Personagens').setStyle(ButtonStyle.Link).setURL('https://war.uwu.ai/#fac').setEmoji('📜')
                    );
                    await i.update({ embeds: [characterEmbed], components: [characterRow, buttonRow] });
                } else if (i.customId.startsWith('select_character_')) {
                    const factionKey = i.customId.split('_')[2];
                    const characterIndex = parseInt(selectedValue, 10);
                    const selectedCharacter = factionsData[factionKey].characters[characterIndex];
                    const characterEmbed = createCharacterEmbed(selectedCharacter, factionsData[factionKey].color);
                    await i.update({ embeds: [characterEmbed] });
                }
            }
        });

        collector.on('end', async () => {
            try {
                const finalMessage = await interaction.fetchReply();
                const disabledComponents = finalMessage.components.map(row => {
                    row.components.forEach(component => component.setDisabled(true));
                    return row;
                });
                await interaction.editReply({ components: disabledComponents });
            } catch (error) { /* Ignora erro */ }
        });
    }
};