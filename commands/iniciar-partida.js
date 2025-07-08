const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const gameManager = require('../GameManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('iniciar-partida')
        .setDescription('Cria um lobby para uma nova partida de Guerra Civil.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        if (gameManager.isGameActive()) {
            return interaction.reply({ 
                content: '❌ Já existe uma partida em andamento. Use `/encerrar-partida` para terminar a atual.',
                ephemeral: true 
            });
        }
        try {
            await gameManager.createLobby(interaction);
        } catch (error) {
            console.error("Erro ao criar o lobby:", error);
            await interaction.reply({ content: 'Houve um erro ao tentar criar a partida.', ephemeral: true });
        }
    }
};