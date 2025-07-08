const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const gameManager = require('../GameManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('encerrar-partida')
        .setDescription('Força o encerramento da partida atual.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        try {
            await gameManager.endGame(interaction);
        } catch (error) {
            console.error("Erro ao encerrar a partida:", error);
            await interaction.reply({ content: 'Houve um erro ao tentar encerrar a partida.', ephemeral: true });
        }
    }
};