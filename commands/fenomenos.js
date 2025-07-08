// Importa todas as classes necessárias do discord.js
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fenomenos')
        .setDescription('Explora os Fenômenos que alteram a realidade do jogo.'),

    async execute(interaction) {
        // --- 1. DEFINIÇÃO DE TODOS OS EMBEDS ---

        // Embed inicial que aparece quando o comando é executado
        const initialEmbed = new EmbedBuilder()
            .setColor(10158225)
            .setTitle("``☄️`` ╹Fenômenos")
            .setDescription("*Foram necessários vinte anos para que o mundo começasse a engolir a própria razão. Durante as duas primeiras décadas após o Grande Cataclisma, a humanidade acreditava ter visto o pior. A terra quebrada, os céus vermelhos, as águas negras. Famílias se dissolveram, civilizações viraram fumaça, e as criaturas que antes só habitavam pesadelos agora tinham nomes, cheiro de carne e sede de sangue.\n\nMas então… vieram os Fenômenos.\n\nNão se sabe exatamente quando o primeiro ocorreu. Ou mesmo o que foi. Alguns dizem que foi o desaparecimento de uma cidade inteira em uma noite sem vento. Outros juram que foi quando os mortos começaram a falar — não para assombrar, mas para alertar. Houve quem tenha presenciado um sol negro surgir por cima do oceano e durar apenas três minutos, tempo suficiente para enlouquecer um vilarejo inteiro.\n\nO que se sabe é o seguinte:*\n\n> *Os Fenômenos não têm lógica. Eles não obedecem regras conhecidas. Eles alteram a realidade — e às vezes, até as pessoas.*\n\n*Ninguém sabe quantos Fenômenos existem. Eles não seguem um padrão. Podem durar um instante ou uma semana. Podem afetar uma única criatura ou corromper uma aldeia inteira. Às vezes, mudam o curso de uma partida inteira, fazendo com que aliados se tornem inimigos, que mortos ressuscitem com olhos que não são mais seus, ou que o tempo se dobre sobre si mesmo.\n\nO que se suspeita — o que sussurram os poucos estudiosos que restaram — é que os Fenômenos não são acidentes. São ecos. Rachaduras. Lamentos de algo muito mais antigo do que o Cataclisma. Algo que, talvez, ainda esteja olhando para este mundo.*")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369120700698464346/aa.gif?ex=686e6bc4&is=686d1a44&hm=943ccf3e50b2e32f678e1e80aa2ff7a3fec0a690275a010fcf04463c9c97f395&")
            .setFooter({ text: "“Não tente entender um Fenômeno. Sobreviver já é sorte suficiente.”" });

        // Embeds para cada botão
        const expurgoEmbed = new EmbedBuilder()
            .setColor(6553746)
            .setTitle("``🌘``╹Expurgo")
            .setDescription("*Ninguém sabe ao certo qual foi o primeiro Expurgo. Mas dizem que ele aconteceu em uma vila onde o medo dominava mais do que qualquer criatura.\n\nDurante vinte dias, mortes inexplicáveis atormentaram os sobreviventes — rostos familiares amanhecendo sem olhos, corpos retorcidos nas ruas. Não importava o quanto suspeitassem, gritassem, chorassem. A verdade era um luxo que ninguém podia bancar.\n\nEntão, na vigésima primeira noite, uma névoa púrpura cobriu o céu. As estrelas sumiram. Os sinos da velha igreja tocaram sozinhos, e cada habitante acordou no centro da vila... em círculo. Ninguém conseguia se mover para longe. Ninguém conseguia mentir.\n\nEles ouviram uma voz.\nBaixa, quase um sussurro, mas impossível de ignorar:\n\"Escolham três.\"\n\nE assim nasceu o Expurgo.\nUma noite em que todas as regras se dobram à sede irracional do coletivo.\nNenhuma bênção protege. Nenhuma habilidade interfere. Só sobra o pavor nu da exposição. E a certeza de que três irão morrer — por palavra, paranoia ou puro silêncio.*\n#  ╹Efeitos:\n- O Fenômeno do Expurgo acontece em uma noite aleatória da partida. Durante essa noite, **TODAS as habilidades são anuladas**. Isso inclui:\n➥ Habilidades ativas e passivas.\n➥ Proteções, bênçãos, imunidades.\n➥ Condições especiais, como buffs ou maldições.\n\n- **Reunião forçada:** Todos os jogadores são reunidos em um canal de texto, podendo conversar livremente por 5 minutos.\n- **Escolha brutal:** Ao fim da conversa, todos os jogadores devem votar em três pessoas para morrer. A votação é aberta, e o resultado é imediato e irreversível.\n- **Execução:** Os três mais votados morrem imediatamente, sem possibilidade de defesa, salvação ou reversão.")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369407890645061823/raw.png?ex=686e25bb&is=686cd43b&hm=5ff94ec94571b3579c25c6b5dca2b8681106fcaeeec8daa0283b7bdfe348a3ef&");

        const invertidoEmbed = new EmbedBuilder()
            .setColor(62463)
            .setTitle("``🌌``╹Mundo Invertido")
            .setDescription("*Diz-se que o “Mundo Invertido” nasceu de uma fenda que se abriu sob os escombros de uma antiga torre de vigília — uma construção feita para observar os céus, mas que acabou soterrada pelas próprias mentiras de quem a ergueu. Vinte anos após o Cataclisma, em certas noites, o mundo simplesmente… desmorona sobre si mesmo.\n\nAs estrelas brilham ao contrário, a lua gira em reverso, e até os instintos mais básicos — como o de sobrevivência — parecem se subverter. Alguns dizem que o próprio tempo hesita. O que antes era certo, agora se desfaz em caos. A morte vira vida. O predador vira presa.\nE quem antes era caçador… pode virar história.*\n#  ╹Efeitos:\n- A “Noite do Mundo Invertido” pode surgir em qualquer noite da partida, ativada de forma aleatória durante ou após as ações noturnas. O momento da ativação influencia diretamente o que será invertido. \n- Ela inverte os acontecimentos da noite. Isso inclui ações diretas como matar, proteger, investigar e qualquer efeito originado de habilidades, bênçãos ou maldições.\n\n**``🧠`` EXEMPLOS PRÁTICOS:**\n- Se Jogador A matou o Jogador B, e o Mundo Invertido for ativado depois dessa ação, Jogador B matará o Jogador A em vez disso.\n- Se Jogador C protegeu o Jogador D, a proteção será invertida — Jogador C acabará se protegendo a si mesmo, ou até impedindo que D receba algo benéfico.\n- Se um jogador estava condenado a morrer, e outro iria salvá-lo, com a inversão, o salvador pode virar o alvo da morte.\n- Se o fenômeno for ativado antes do fim da noite, jogadores atentos podem tentar prever e usar a inversão ao seu favor, como se atirar em um inimigo sabendo que o golpe pode voltar ao atirador — ou usá-la para que o próprio ataque seja devolvido e usado como armadilha.\n\n``⚠️`` **IMPORTANTE:**\n- Não é uma reversão de intenções, é uma reversão de consequências. Ou seja, você ainda escolhe o mesmo alvo, mas o efeito final se inverte.\n- Apenas eventos da NOITE são afetados. Tudo que ocorreu em fases anteriores (como votos do dia ou execuções) permanece inalterado.\n- Esse fenômeno não pode ser anulado, evitado ou previsto. Mesmo os mais poderosos sucumbem ao espelho quebrado do mundo.")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369414298761171095/raw.png?ex=686e2bb3&is=686cda33&hm=1dab7252da06af5206f9492213f5082c2d81343f1539540a59bf972065bddda2&");

        const escuroEmbed = new EmbedBuilder()
            .setColor(6560256)
            .setTitle("``🌗``╹O Dia Mais Escuro")
            .setDescription("*Dizem que nas noites mais silenciosas, algo espreita por trás das sombras do céu. Não um monstro, não uma fera — mas um deus.\nNinguém sabe seu nome. Ninguém ousa perguntar.\nEle apareceu pela primeira vez trinta anos após o Grande Cataclisma, num dia em que o sol não nasceu. O céu permaneceu fechado como uma ferida não cicatrizada, e uma névoa espessa tomou conta da civilização.\n\nUm sussurro ecoou entre os becos e telhados:\n\n> “Me dê uma vida... que lhe devolvo outra.”\n\nEle não falou alto. Ele não gritou. Apenas… ofereceu.\n\nO “Dia Mais Escuro” não vem com aviso. Ele apenas cai.\nQuando vem, tudo muda. Não há bem. Não há mal.\nApenas escolhas.*\n#  ╹Efeitos:\n- O Dia Mais Escuro é um fenômeno raro e brutal que pode acontecer aleatoriamente durante o DIA de qualquer rodada. Durante esse dia, um ser misterioso surgirá e interromperá a dinâmica normal do jogo. Ele se dirigirá somente aos membros da civilização com uma proposta:\n\n> “Escolham um de vocês para morrer. Em troca, poderão trazer outro de volta dos mortos.”\n\n- Todos os jogadores participam da decisão.\n- Cada jogador poderá indicar um sacrifício entre os outros jogadores vivos.\n- Após uma votação entre os jogadores, o jogador com mais votos será executado.\n- Em seguida, cada jogador poderá sugerir um jogador morto para retornar à vida (somente membros da civilização mortos podem ser ressuscitados).\n- O jogador morto com mais votos será ressuscitado, retornando na próxima noite com suas habilidades restauradas.\n- Caso haja empate tanto no sacrifício quanto na escolha do ressuscitado, ninguém morre e ninguém revive.\n- Jogadores ressuscitados relembram ações e conversas ocorridas enquanto estavam mortos.")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369421769315713185/raw.png?ex=686e32a8&is=686ce128&hm=d81968c2735bc9570855cd6f9da183512a70e2cb25e7d67547a47b58fdf902b9&");

        const luaEmbed = new EmbedBuilder()
            .setColor(393316)
            .setTitle("``🌕``╹Lua Cheia")
            .setDescription("*Dizem que a Lua sempre teve influência sobre o mundo. As marés, as emoções, os ciclos da vida. Mas após o Grande Cataclisma, sua influência se intensificou. Às vezes, ela surge no céu com uma intensidade sobrenatural — brilhante, imensa, banhando tudo com uma luz prateada quase hipnótica.\n\nNessas noites, criaturas sussurram. Instintos antigos despertam.\nA “Noite de Lua Cheia” não anuncia sua chegada. Ela apenas... acontece.\nE quando acontece, algo muda.\n\nAlguns dizem que é uma benção.\nOutros, uma maldição.\n\nSeja como for, essa luz muda o jogo.*\n#  ╹Efeitos:\n- A Noite de Lua Cheia é um fenômeno que pode ocorrer múltiplas vezes ao longo de uma partida. Não possui um padrão fixo e pode até se repetir por noites consecutivas, ou demorar várias rodadas para surgir novamente.\n- Quando esse fenômeno acontece, ele concede aprimoramentos temporários (buffs) a certas funções (roles).\n- As funções que recebem buffs durante a noite de lua cheia é informado na descrição da mesma. \n- Jogadores devem agir com extrema cautela durante a Noite de Lua Cheia, pois inimigos ocultos podem estar mais letais do que nunca.")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369427055636123749/raw.png?ex=686e3794&is=686ce614&hm=8f043501410c4f3cccad82f473ad50cfde084dead5c8305f982e01cbcd1ef287&");
        
        const luxuriaEmbed = new EmbedBuilder()
            .setColor(16711680)
            .setTitle("``💋``╹Luxúria")
            .setDescription("*Reza uma antiga lenda que antes mesmo do Grande Cataclisma, existia uma divindade esquecida — Luxúria — cultuada em silêncio por aqueles que buscavam prazer, desejo e conexão eterna. Dizem que, nos tempos mais sombrios da civilização, ela caminha novamente entre os vivos, e quando sua presença se manifesta… todos são tomados por uma estranha ânsia de união. É como se suas almas buscassem desesperadamente um reflexo, um eco, um par.\n\nNinguém sabe ao certo por que Luxúria escolhe momentos aleatórios para agir — pode ser em pleno dia, sob o calor das decisões racionais, ou no véu da noite, quando os instintos falam mais alto. Mas uma coisa é certa: quando ela surge, ninguém sai ileso.\n\nEla une. Ela condena. Ela sela destinos — com um beijo invisível de morte.*\n#  ╹Efeitos:\n- O fenômeno Luxuaria pode ocorrer em qualquer momento do jogo — de forma aleatória, seja de dia ou de noite.\n- Assim que ativado, casais são formados aleatoriamente entre os jogadores vivos. A união é absoluta: um vínculo eterno é criado entre cada dupla.\n- Caso o número de jogadores no momento do fenômeno seja ímpar, um jogador ficará sem par e, portanto, sem vínculo.\n- Se um dos jogadores vinculados morrer, o outro morrerá junto, independente de sua função, proteção ou status.\n- Nenhuma defesa — nem mesmo as supremas — é capaz de impedir esse efeito.\n- Jogadores civis podem ser vinculados a Eloquentes, ou vice-versa. Isso pode servir tanto como maldição quanto como ferramenta de infiltração ou sabotagem.\n- O vínculo é revelado para todos os jogadores.")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369433198500515862/raw.png?ex=686e3d4d&is=686cebcd&hm=0536bf127d77662a181491243c7f9332f77470c745d4d8011a3be1c51dd306db&");
        
        const unicornioEmbed = new EmbedBuilder()
            .setColor(16777215)
            .setTitle("``🦄``╹Unicórnios Mortais")
            .setDescription("*Ninguém levou a sério quando a primeira testemunha disse ter visto um unicórnio devorando o braço de um caçador. Achavam que era delírio, trauma ou coisa de algum Fungomorfismo avançado. Até que, numa noite chuvosa, um clarão púrpura rasgou os céus... e eles vieram.\n\nCriaturas magníficas e absurdas, de pelagens brilhantes e olhos que choravam sangue, galopando como uma manada de pesadelos encantados. Seus chifres não curavam — perfuravam. Seus relinchos causavam hemorragias internas. O ataque durou menos de um minuto. Quando terminou, havia corpos destroçados... e brilho cintilante no ar.\n\nIsso aconteceu há quatro anos. Desde então, esse fenômeno nunca mais foi visto — mas as lendas se multiplicam. E agora, dizem que os céus voltaram a brilhar em púrpura.*\n#  ╹Efeitos:\n- O Ataque dos Unicórnios pode acontecer a qualquer momento, seja de dia ou à noite, sem aviso prévio. Uma manada de Unicórnios Espectralmente Violentos invade o cenário.\n- Três jogadores morrem imediatamente e sem chance de defesa, ignorando bênçãos, imunidades ou proteções:\n\n➥ 1 jogador da Civilização (escolhido aleatoriamente)\n➥ 1 jogador dos Eloquentes (escolhido aleatoriamente)\n➥ 1 jogador de qualquer facção (também aleatório, podendo ser repetido de uma das categorias anteriores)\n\nEssas mortes são anunciadas publicamente como vítimas dos Unicórnios.\nO fenômeno também cancela quaisquer ações pendentes dos jogadores mortos, caso ocorra durante a noite. Não há como prever ou escapar desse fenômeno. O ataque é caótico, brutal e imparcial. Mas... talvez, só talvez, haja algo por trás dessas criaturas míticas. Algo que ainda não foi revelado.")
            .setImage("https://media.discordapp.net/attachments/1197257632377995274/1369439814847434822/d23cb03e-84c5-4248-9784-7d792ae5be4d.png?ex=686e4376&is=686cf1f6&hm=069311f9df102800b90dff66383e7d0accbd18bfbc591b0c7d716e580957fe97&");


        // --- 2. CRIAÇÃO DOS BOTÕES E LINHAS DE AÇÃO ---

        // O customId é um identificador único para cada botão. É assim que saberemos qual foi clicado.
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('fenomeno_expurgo').setLabel('Expurgo').setStyle(ButtonStyle.Secondary).setEmoji('🌘'),
                new ButtonBuilder().setCustomId('fenomeno_invertido').setLabel('Mundo Invertido').setStyle(ButtonStyle.Secondary).setEmoji('🌌'),
                new ButtonBuilder().setCustomId('fenomeno_escuro').setLabel('O Dia Mais Escuro').setStyle(ButtonStyle.Secondary).setEmoji('🌗')
            );
        
        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('fenomeno_lua').setLabel('Lua Cheia').setStyle(ButtonStyle.Secondary).setEmoji('🌕'),
                new ButtonBuilder().setCustomId('fenomeno_luxuria').setLabel('Luxúria').setStyle(ButtonStyle.Secondary).setEmoji('💋'),
                new ButtonBuilder().setCustomId('fenomeno_unicornio').setLabel('Unicórnios Mortais').setStyle(ButtonStyle.Secondary).setEmoji('🦄')
            );

        // --- 3. ENVIO DA MENSAGEM INICIAL E CRIAÇÃO DO COLETOR ---

        // Envia a mensagem inicial com o primeiro embed e os botões
        const response = await interaction.reply({
            embeds: [initialEmbed],
            components: [row1, row2],
            ephemeral: true, // A mensagem só é visível para quem usou o comando
        });

        // Filtro para garantir que apenas o usuário original possa interagir
        const collectorFilter = i => i.user.id === interaction.user.id;

        try {
            // Cria um "coletor" que espera por interações de botão
            const collector = response.createMessageComponentCollector({
                componentType: ComponentType.Button,
                filter: collectorFilter,
                time: 300_000, // Os botões funcionarão por 5 minutos (300000 ms)
            });

            // --- 4. LÓGICA PARA QUANDO UM BOTÃO É CLICADO ---

            collector.on('collect', async i => {
                // Usa o customId para determinar qual embed mostrar
                let selectedEmbed;
                switch (i.customId) {
                    case 'fenomeno_expurgo':
                        selectedEmbed = expurgoEmbed;
                        break;
                    case 'fenomeno_invertido':
                        selectedEmbed = invertidoEmbed;
                        break;
                    case 'fenomeno_escuro':
                        selectedEmbed = escuroEmbed;
                        break;
                    case 'fenomeno_lua':
                        selectedEmbed = luaEmbed;
                        break;
                    case 'fenomeno_luxuria':
                        selectedEmbed = luxuriaEmbed;
                        break;
                    case 'fenomeno_unicornio':
                        selectedEmbed = unicornioEmbed;
                        break;
                }
                
                // Atualiza a mensagem original com o embed selecionado
                await i.update({ embeds: [selectedEmbed], components: [row1, row2] });
            });

            // Quando o tempo do coletor acaba, desativa os botões
            collector.on('end', () => {
                row1.components.forEach(button => button.setDisabled(true));
                row2.components.forEach(button => button.setDisabled(true));
                interaction.editReply({ components: [row1, row2] });
            });

        } catch (e) {
            console.error("Erro ao criar coletor de interações:", e);
            await interaction.editReply({ content: 'Ocorreu um erro ao processar os botões.', components: [] });
        }
    },
};