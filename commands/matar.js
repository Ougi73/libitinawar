const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const gameManager = require('../GameManager.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('matar')
        .setDescription('Mestre: Mata um jogador e revela seu papel.')
        .addUserOption(option => 
            option.setName('jogador')
                .setDescription('O jogador a ser eliminado da partida.')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        if (!gameManager.isGameActive()) {
            return interaction.reply({ content: 'Não há nenhuma partida em andamento.', ephemeral: true });
        }

        const targetUser = interaction.options.getUser('jogador');
        
        // Chama a função no GameManager para processar a morte
        const result = gameManager.killPlayer(targetUser.id);

        if (!result.success) {
            // Se o GameManager retornar um erro (jogador não existe, já está morto, etc.)
            return interaction.reply({ content: `❌ Erro: ${result.reason}`, ephemeral: true });
        }

        // Se a morte for bem-sucedida, anuncia publicamente no canal
        await interaction.reply(`☠️ **O jogador ${result.user.username} foi eliminado!**\nSeu papel era: **${result.role.name}**`);
    }
};