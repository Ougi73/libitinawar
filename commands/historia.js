// Importa as classes necessárias do discord.js
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    // Define os dados do comando
    data: new SlashCommandBuilder()
        .setName('historia')
        .setDescription('Mostra informações sobre a história do jogo Guerra Civil.'),

    // A função que será executada quando o comando for usado
    async execute(interaction) {
        // Cria um "Embed", que é um bloco de mensagem rico e formatado
        const historyEmbed = new EmbedBuilder()
            .setColor(0xAA0000) // Define uma cor para a barra lateral do embed (vermelho escuro)
            .setTitle('📜 A História de Guerra Civil')
            .setDescription('Quer conhecer a historia do jogo Guerra Civil? Interaja com o botão abaixo. Você saberá tudo que precisa para começar sua jornada!');

        // Cria um botão
        const historyButton = new ButtonBuilder()
            .setStyle(ButtonStyle.Link) // Botão de link, que redireciona para uma URL
            .setLabel('Ver História Completa')
            .setEmoji('💀')
            .setURL('https://war.uwu.ai/#hstr');

        // Cria uma "ActionRow", que é uma linha de container para componentes como botões
        const row = new ActionRowBuilder()
            .addComponents(historyButton);

        // Responde à interação do usuário com o embed e o botão
        await interaction.reply({
            embeds: [historyEmbed],
            components: [row]
        });
    },
};