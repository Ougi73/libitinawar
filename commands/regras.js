// Importa as classes necessárias, incluindo as de componentes de botão
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    // Define os dados do comando
    data: new SlashCommandBuilder()
        .setName('regras')
        .setDescription('Exibe as regras do jogo.'),

    // A função que será executada quando o comando for usado
    async execute(interaction) {
        
        // Array contendo todos os embeds das regras (sem alterações aqui)
        const embeds = [
            new EmbedBuilder()
                .setColor(0x3498DB)
                .setTitle("⚖️ Regras Gerais")
                .setDescription("# **Inatividade e Comunicação**\n- Participar do jogo e não interagir (ficar calado) durante o Dia:\n➥ Resultado: Morte automática pelo Deus + Advertência \n*(exceto se seu personagem tiver um efeito especial que impeça falar).*\n\n- Demorar para votar, se defender ou agir durante o seu turno:\n➥ Resultado: Morte automática pelo Deus *(salvo casos de efeitos de jogo).*\n\n- AFK (ausente sem aviso):\n➥ Resultado: Morte automática pelo Deus + Advertência \n*(exceto com justificativa plausível aceita pelo Deus).*\n# **Comportamento nas Mensagens**\n\n- Reações com Emojis que possam indicar suspeitas, dicas ou prejudicar o andamento do jogo:\n➥ Resultado: Advertência.\n\n- Queimar a largada (agir antes da hora):\n➥ Resultado: Morte automática pelo Deus.\n# **Sobre Perguntas e Cartas**\n\n- Perguntar algo que já está claramente descrito na carta por preguiça de ler:\n➥ Resultado: Advertência.\n*(⚠️ É permitido perguntar caso realmente não tenha entendido o funcionamento, mas sempre com bom senso).*\n# **Alianças e Informação**\n\n- Formar alianças entre facções inimigas, passar informações após a morte, ou comunicar ações de forma ilegal:\n➥ Resultado: Advertência.\n# **Forja e Enganações**\n- Forjar imagens (prints falsos, montagens ou edições) para enganar outros jogadores; PROIBIDO, exceto se a sua carta ou habilidade especial explicitamente permitir isso.\n➥ Resultado fora da habilidade: Morte pelo Deus + Advertência pesada.\n# **Uso de Pings**\n- Evite pings desnecessários. Não marque @Deus ou @Mestre a todo momento.\n➥ Apenas pingue outros jogadores se realmente necessário durante o jogo."),
            new EmbedBuilder()
                .setColor(0x2ECC71)
                .setTitle("🛠️ Regras Adicionais")
                .setDescription("- **Respeito ao Ambiente de Jogo**\n➥ Ofensas, desrespeito ou comportamento tóxico entre jogadores resultará em banimento imediato do jogo atual e possibilidade de banimento permanente em reincidência.\n*(Discussões de jogo, provocações moderadas e blefes fazem parte, mas respeito é obrigatório).*\n\n- **Tempo Limite de Jogadas**\n➥ Durante o dia, o tempo de discussão será limitado (ex: 10 a 15 minutos no máximo).\n➥ Durante a noite, jogadores com ações terão até 5 minutos para enviar suas escolhas privadas.\n➥ Caso excedam o tempo, o jogador perde a ação da noite automaticamente.\n\n- **Sigilo é Prioridade**\n➥ Nenhum jogador pode expor publicamente detalhes de sua carta ou de alguém que você saiba (foto da carta, transcrição completa, etc.), a menos que sua habilidade especial permita.\n\n- **Regras de Ressurreição e Efeitos de Mortos**\n➥ Se houver cartas que permitam \"voltar à vida\" ou \"agir depois de morto\", o jogador deve seguir estritamente o que a carta determina — sem interpretações próprias. Lembrando, aqueles que estão mortos vão direto para o mundo dos mortos."),
            new EmbedBuilder()
                .setColor(0xFFA500)
                .setTitle("⚡ Atualizações Constantes")
                .setDescription("**Todas as regras e também o tutorial geral do jogo estão sujeitas a mudanças sem aviso prévio para melhor ajuste do jogo. As atualizações serão feitas conforme surgirem novas classes, facções e eventos especiais.**"),
        ];

        // --- NOVO CÓDIGO ---
        // Cria o botão de link para o site
        const siteButton = new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel('Mais informações no site')
            .setEmoji('🌐') // Emoji opcional de globo
            .setURL('https://war.uwu.ai');

        // Cria a linha de ação para colocar o botão
        const row = new ActionRowBuilder()
            .addComponents(siteButton);
        // --- FIM DO NOVO CÓDIGO ---


        // Responde à interação enviando os embeds E os componentes (botão)
        await interaction.reply({
            embeds: embeds,
            components: [row], // Adicionamos a linha com o botão aqui
            ephemeral: true 
        });
    },
};