// Importa as classes necessárias do discord.js
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    // Define os dados do comando
    data: new SlashCommandBuilder()
        .setName('tutorial')
        .setDescription('Exibe o tutorial de como jogar Guerra Civil.'),

    // A função que será executada quando o comando for usado
    async execute(interaction) {

        const embeds = [
            new EmbedBuilder()
                .setColor(16773120)
                .setTitle("📜 Conceito do Jogo:")
                .setDescription("**Bem-vindo à Guerra Civil**, um jogo de dedução, estratégia e sorte extrema! Prepare-se para mergulhar em um mundo pós-cataclísmico, onde alianças frágeis e traições inesperadas moldam cada partida.\n\nO mundo de Guerra Civil é dividido entre facções rivais: Civilização, Eloquentes, Nômades e, futuramente, outras forças emergentes.\nCada jogador recebe aleatoriamente um personagem, que pertence a uma classe, e cada classe possui seus próprios objetivos e habilidades especiais.\n\n⚔️ Todos são, de alguma forma, inimigos entre si, mas o foco principal do conflito gira entre a Civilização (os que querem restaurar o mundo) e os Eloquentes (os que desejam dominar o que restou)."),
            new EmbedBuilder()
                .setColor(16773120)
                .setTitle("🌓 Estrutura do Jogo:")
                .setDescription("O jogo acontece em dois períodos que se revezam: **Noite e Dia.**\n# 🌙 Noite\n- **Descrição:** Durante a noite, todos os jogadores ficam \"em silêncio\" no jogo.\n- **Ações Noturnas:** Jogadores com poderes noturnos podem agir — atacando, protegendo, investigando, manipulando, etc.\n\n- **Como funciona:**\n➥ O jogador envia sua ação secreta por mensagem privada ao mestre do jogo.\n➥ __Exemplo:__ Se você for um Protetor, pode enviar: “Proteger Jogador 5.”\n➥ __Exemplo:__ Se for um Assassino, pode enviar: “Atacar Jogador 2.”\n➥ Todas as ações é realizada em ordem de chegada, ou seja; quem digitou primeiro executou sua ação mais rápida que os outros jogadores.\n\n*⚠️ Algumas cartas possuem defesas naturais ou imunidades — certas ações podem falhar.*\n\n# ☀️ Dia\n- **Descrição:** Durante o dia, todos os jogadores se reúnem para debater o que pode ter acontecido durante a noite.\n\n- **Discussão Livre:**\n➥ Jogadores discutem teorias, expõem suspeitas ou tentam se inocentar.\n➥ Mentiras e blefes são permitidos — mas cuidado: isso pode virar contra você!\n\n- **Votação:**\n➥ Ao final do dia, todos devem votar para eliminar alguém.\n➥ Quem receber mais votos é eliminado (vai para a “forca”).\n➥ Em caso de empate, regras especiais podem ser aplicadas\n (ex: voto de minerva de algum líder)."),
            new EmbedBuilder()
                .setColor(16773120)
                .setTitle("🧩 Classes e Cartas:")
                .setDescription("Cada jogador recebe uma carta representando seu personagem.\n\n- **Cada carta contém:**\n➥ Sua facção (ex: Civilização, Eloquentes, Nômades)\n➥ Seu objetivo de vitória\n➥ Sua habilidade especial\n➥ Suas condições únicas (por exemplo: imunidade a primeira ação hostil, ataque duplo, manipulação de votos, etc.)\n\n*⚠️ Nem todas as cartas vão possuir condições únicas.*\n\n**Exemplo de Carta:**\n> Nome: Guardião da Luz\n> Facção: Civilização\n> Objetivo: Proteger membros da Civilização até que todos os Eloquentes sejam eliminados.\n> Habilidade: Durante a noite, pode proteger um jogador de qualquer ataque."),
            new EmbedBuilder()
                .setColor(16773120)
                .setTitle("🎮 Complementos:")
                .setDescription("**🔄 Regras Dinâmicas:**\nAs regras podem evoluir com o tempo conforme o jogo cresce!\n\nAtualizações podem adicionar novas facções, cartas, habilidades ou eventos especiais (como catástrofes globais, feriados, revoltas internas...).\n\nAs partidas podem mudar de estrutura dependendo da história que está sendo escrita no mundo do jogo.\n# ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼\n**🧠 Dicas para Sobrevivência**\n\n- Civilização: \nBusque aliados rapidamente, mas cuidado para não confiar demais.\n\n- Eloquentes: \nManipule e sabote as alianças para vencer.\n\n- Nômades: \nJogue pelos seus interesses. Você é livre para apoiar ou atrapalhar qualquer lado.\n\n- Todos: \nSua voz é sua arma durante o dia. Sua decisão é seu escudo durante a noite.\n# ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼\n**🎯 Como vencer?**\nCada facção tem sua própria condição de vitória.\n- A Civilização vence se exterminar todas as ameaças.\n- Os Eloquentes vencem se conquistarem ou eliminarem a maioria.\n- Os Nômades podem ter condições específicas ou individuais.\n# ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼\nPrepare-se, pois na Guerra Civil, até mesmo seu aliado mais próximo pode se tornar sua sentença de morte!\n**Boa sorte, sobrevive quem sabe jogar melhor... ou quem mente melhor.**"),
        ];

        // Cria o botão de link para o site
        const siteButton = new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel('Mais Detalhes no Site')
            .setEmoji('🌐')
            .setURL('https://war.uwu.ai');

        // Cria a linha de ação para colocar o botão
        const row = new ActionRowBuilder()
            .addComponents(siteButton);

        // Responde à interação com os embeds e o botão
        // A mensagem será visível apenas para quem usou o comando
        await interaction.reply({
            embeds: embeds,
            components: [row],
            ephemeral: true,
        });
    },
};