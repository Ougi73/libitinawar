// Este arquivo funciona como um banco de dados para os personagens.
// Para adicionar a imagem de um personagem, basta substituir o valor de 'image' pela URL da imagem.

const factionsData = {
    civilizacao: {
        name: "Civilização",
        emoji: "👑",
        color: 0x3498DB, // Azul
        characters: [
            {
                name: 'Rei',
                image: 'https://i.imgur.com/placeholder.png', // SUBSTITUA PELA URL DA IMAGEM
                abilities: [
                    { name: '◆ Passiva: "Autoridade Absoluta"', value: '➥ Durante o dia, o voto do Rei tem o peso de 3 votos.\nSe decidir revelar sua identidade ao povo, seu voto passa a valer 5 votos permanentes.\n➥ Se o Rei for enviado à forca sem que sua identidade esteja revelada, ele pode se revelar publicamente como Rei, além de ganhar +1 voto permanente extra. Podendo somar 6 votos.\n\n*"Quando um Rei fala, o mundo escuta."*' },
                    { name: '◆ Passiva: "Herança"', value: '➥ Caso um jogador da Civilização com função de assassinato morra sem conseguir matar ninguém, o Rei herda o direito de executar um inimigo.\n\nEle desbloqueia a habilidade:\n• Ativa: "Julgamento Real"\n➥ Uma única vez, o Rei pode escolher e eliminar qualquer jogador (exceto os que possuam proteção contra assassinato direto).\n\n*"A justiça não morre com seus soldados. Ela renasce com o Rei."*' }
                ]
            },
            {
                name: 'Executora',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Julgamento Final"', value: '➥ Durante qualquer momento da partida — seja dia ou noite — a Executora pode escolher qualquer jogador para ser executado. Essa execução ignora absolutamente qualquer defesa, proteção ou habilidade especial que impeça a morte. Seu julgamento é absoluto.\n➥ Essa habilidade só pode ser usada uma única vez por partida.\n➥ Se a Executora eliminar um inimigo da Civilização (Eloquentes), ela automaticamente descobre a identidade secreta do Rei, fortalecendo a aliança entre as duas figuras mais poderosas da Civilização.\n\n*"A justiça verdadeira não precisa de testemunhas, apenas de coragem."*' }
                ]
            },
            {
                name: 'Sentinela',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Olhar Velado"', value: '➥ Durante a noite, o Sentinela pode vigiar um jogador. Ao fazer isso, ele recebe 3 informações aleatórias sobre essa pessoa — sendo apenas 1 verdadeira.\n➥ Caso ele vigie o mesmo jogador novamente, ele receberá 1 única informação verdadeira.\n➥ Contudo, certas funções podem manipular ou distorcer as informações colhidas, fazendo com que até o Sentinela precise desconfiar do que vê.\n\n*“Nem toda verdade se revela de imediato... mas o tempo afia os olhos.”*' },
                    { name: '◆ Passiva: "Retorno do Olhar"', value: '➥ Se o Sentinela for visitado por qualquer jogador (exceto em ações que resultem diretamente em sua morte), ele receberá 2 informações sobre o visitante — sendo 1 verdadeira e 1 falsa, da mesma forma que sua habilidade ativa.\n\n*“Você pisou perto demais. Agora, sua sombra pertence a mim.”*' }
                ]
            },
            {
                name: 'Umbra',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Eco Noturno"', value: '➥ Durante a noite, Umbra pode se fundir à sombra de um jogador. Enquanto estiver fundida, ela recebe fragmentos de informações sobre o que aquele jogador faz ou fala — sempre de forma parcial, simbólica ou embaralhada.\n➥ Se o jogador executar alguma ação, Umbra verá resquícios de evento (exemplo: “lâmina fria”, “grito abafado”, “duas presenças separadas”).\n➥ Se o jogador participar de uma conversa secreta, Umbra captará fragmentos temáticos da conversa (exemplo: “código quebrado... hesitação... eles sabem?”).\n➥ As informações nunca são diretas, e o jogador Umbra deve interpretá-las, podendo compartilhá-las com a população. Esta habilidade não funciona contra proteções específicas ou poderes que ocultam presença ou falas. Ela também não é detectada por habilidades de rastreio ou detecção padrão.\n\n*"Mesmo o silêncio mais profundo guarda ecos... e eu ouço cada um deles."*' }
                ]
            },
            {
                name: 'Juiz',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Tribunal do Contrato"', value: '➥ Durante o dia, o Juiz pode iniciar um Tribunal durante a fase de votação, revelando sua identidade à cidade. O jogador mais votado será executado sem direito à defesa ou julgamento.\n➥ Dois jogadores podem ser executados em um único Tribunal. Os papéis e testamentos dos executados são ocultados até o fim da sessão. Durante o Tribunal, o tempo de votação se estende para 60 segundos, e o Juiz recebe 1 voto adicional.\n➥ Você pode iniciar o Tribunal duas vezes por jogo.\n➥ Se o Juiz morrer durante a fase, o Rei ou a Executora poderá concluir o Tribunal em seu lugar.\n\n*“Que os deuses se calem — hoje, só a verdade será ouvida.”*' },
                    { name: '◆ Ativa: "Palavra Final"', value: '➥ Se o tempo limite do dia for atingido sem que ninguém vote, o Juiz pode forçar 1 jogador a se defender, abrindo uma janela de julgamento. Só pode ser usada uma vez por dia.\n\n*“Se a justiça hesita, eu a arrasto pelos cabelos.”*' }
                ]
            },
            {
                name: 'Médica',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Coquetel da Sobrevivência"', value: '➥ Durante a noite, você pode anabolizar 1 jogador, turbinando seu corpo com compostos instáveis e de origem duvidosa. O jogador se torna extremamente resistente até a noite seguinte e reflete qualquer ataque direto, matando imediatamente quem o atacar, a menos que o agressor possua alguma forma de imunidade ou defesa absoluta.\n➥Você pode manter o efeito por várias noites, desde que continue aplicando o coquetel todas as noites seguidas. Se você falhar em aplicar, o efeito desaparece até ser reativado.\n➥ Apenas você sabe quem foi anabolizado.\n\n*"Vamos testar até onde o seu corpo aguenta... pela ciência, claro."*' },
                    { name: '◆ Passiva: "Sistema Anticorpos Inumano"', value: '➥ Seu corpo foi treinado (ou modificado) para resistir aos efeitos mais cruéis. Você é imune a todos os efeitos negativos contínuos, como veneno, combustão lenta, drenagem, paralisia progressiva, entre outros. No entanto, efeitos instantâneos ou golpes diretos ainda podem te atingir normalmente.\n\n*"Já injetei coisa pior em mim mesma antes do café da manhã."*' },
                    { name: '◆ Ativa: "Autópsia Recreativa"', value: '➥ Durante o dia, você pode escolher 1 jogador morto e realizar uma autópsia detalhada ao público (não será revivido). Você receberá uma descrição detalhada da natureza da morte, como:\n\n᠉ Se foi arma física, corte ou trauma, há sinais de luta ou ferramentas.\n᠉ Se foi poder elemental, o corpo mostrará queimaduras, congelamento ou corrosão.\n᠉ Se for algo sobrenatural, isso virá com distorções corporais específicas.\n➥ Se você fizer autópsia em dois corpos com padrão semelhante, você descobrirá a identidade exata do assassino responsável por essas mortes. Pode ser usada uma vez por dia.\n\n*"Você não imagina o que o interior das pessoas pode contar… mas eu mostro se quiser."*' }
                ]
            },
            {
                name: 'Meretriz',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Noite de Luxúria"', value: '➥ Durante a noite, você pode escolher um jogador para “se deitar” com ele. Esse jogador será completamente neutralizado até a próxima noite: ele não poderá realizar ações nem votar, embora ainda possa conversar durante o dia normalmente.\n➥ A neutralização dura apenas enquanto a Meretriz continuar visitando o mesmo alvo.\n➥ Se ela parar de visitar o jogador, ele se tornará livre novamente na noite seguinte.\n➥ Se você se deitar com um membro Eloquente sem qualquer defesa ativa, será assassinada brutalmente ao amanhecer. Contudo, a identidade do assassino será revelada publicamente.\n\n*"Venha... Deixe-me roubar seus sentidos — e sua utilidade."*' }
                ]
            },
            {
                name: 'Vigilante',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Três Promessas"', value: '➥ O Vigilante carrega sua arma com uma bala a cada noite em que não realiza nenhuma ação. Ele pode acumular até três balas por jogo, representando os limites físicos e psicológicos que impôs a si mesmo.\n᠉ Para cada noite que não agir, ele precisa carregar uma bala.\n᠉ Atirar consome uma bala.\n᠉ Não é possível carregar uma nova bala na mesma noite em que atira.\n᠉ Ele pode guardar suas balas e, se desejar, disparar até três vezes em uma mesma noite.\n᠉ Ordem dos tiros importa: se ele acertar um civil no primeiro tiro, os outros dois serão cancelados.\n➥ Essa habilidade pode ser usada para tentar eliminar os ELOQUENTES. No entanto, carregar tanto peso exige responsabilidade.\n\n*"Cada bala é uma promessa: uma que fiz para o mundo, outra para mim, e a última… para o que sobrou da minha alma."*' },
                    { name: '◆ Passiva: “Limite do Julgamento”', value: '➥ O Vigilante caminha na linha tênue entre a justiça e o abismo. Se errar o alvo, paga o preço.\n➥ Se ele matar um jogador da civilização, cometerá suicídio imediato ao amanhecer, dominado pela culpa.\n➥ Se ele matar qualquer função que não seja um Eloquente (mesmo fora da civilização), seu coração será corrompido, e ele se tornará um Eloquente ao próximo turno, passando a jogar por essa facção.\n\n*"Não sou juiz, nem deus. Mas erro… e o erro me destrói."*' }
                ]
            },
            {
                name: 'Amnesiac',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Memória Oculta"', value: '➥ Você não possui habilidades próprias no início da partida. Porém, ao final do turno onde ocorrer a primeira morte, você absorve todas as habilidades (ativas e passivas) do jogador morto.\n➥ Se mais de um jogador morrer no mesmo turno, você absorve aleatoriamente uma das funções dos mortos.\n➥ Caso o jogador absorvido seja da facção Eloquentes, você automaticamente trai a Civilização e muda sua facção para os Eloquentes. Isso não é uma escolha. Sua lealdade muda imediatamente e você passa a vencer com os Eloquentes.\n\n*"Você não escolhe quem é... O mundo escolhe por você."*' }
                ]
            },
            {
                name: 'Paralelo',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Juízo Bifronte"', value: '➥ Durante a noite, Paralelo pode escolher dois jogadores. Ele medirá suas essências, e saberá se pertencem à mesma facção (aliados) ou não (inimigos). Se um dos alvos pertencer a uma facção neutra, o resultado aparecerá como NEUTRO. Paralelo não pode usar essa habilidade nele mesmo.\nEssa habilidade pode ser bloqueada por efeitos específicos de manipulação ou ocultação de identidade.\n\n*“A balança não mente. Vocês sim.”*' }
                ]
            },
            {
                name: 'Nekro',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Vozes Que Não Silenciam"', value: '➥ Durante a noite, Nekro pode escolher um jogador morto da facção da Civilização para reviver temporariamente sua alma e usar sua habilidade ativa em outro jogador à sua escolha.\n➥A habilidade só pode ser usada em membros da Civilização.\n➥ Nekro pode ter somente 1 alma revivida por vez.\n➥ Jogadores revividos não voltam à vida plenamente, apenas suas habilidades ativas são acessíveis — passivas ou efeitos automáticos não se aplicam.\n➥ Jogadores revividos não podem conversar com outros jogadores ou interagir fora da execução da habilidade.\n➥ Se o jogador revivido for morto novamente por alguma ação externa (caso ele seja alvo enquanto em campo espiritual), ele não poderá ser convocado novamente.\n➥ Nekro pode usar essa habilidade duas vezes por partida, com dois cadáveres diferentes.\n➥ Cooldown de 2 noite entre cada ressurreição.\n➥ Se o morto não possuía habilidade ativa, ou já a utilizou, Nekro não poderá usá-la.\n➥ Você recebe o feedback do jogador ressucitado sobre o mundo dos mortos.\n\n*"As cinzas da morte ainda ardem com propósito. Eu sou a lembrança que guia a sua última chance."*' }
                ]
            },
            {
                name: 'Hunter',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: " Sangue Maldito"', value: '➥ Você é completamente imune a ataques noturnos provenientes de funções com a tag "Sobrenatural". (lembrando, nem todos seres são sobrenaturais) Isso inclui assassinatos, maldições ou qualquer forma de ataque direto. Por exemplo, se um Lobisomem ou Vampiro tentar te matar, o ataque falhará automaticamente, mesmo que ele possua efeitos que ignoram defesa comum.\n\n*"Demônios, lobos — conheço todos seus truques. Agora tentem me parar."*' },
                    { name: '◆ Passiva "Instinto Ancestral"', value: '➥ Se uma função com a tag "Sobrenatural" tentar aplicar em você qualquer efeito de marcação, controle mental ou habilidade debilitante (como selos, manipulação, enfeitiçamento), você se torna imune à ação e descobre quem foi o responsável.\n\n*"Seus encantos não tocam quem já enfrentou o escuro de frente."*' },
                    { name: '◆ Ativa "Olhos na Escuridão"', value: '➥ Você pode investigar 1 jogador por noite para descobrir se ele é uma criatura sobrenatural.\nO resultado que você recebe depende da natureza do alvo:\n᠉ Se o jogador possuir a tag “Sobrenatural”, ele aparecerá como suspeito.\n᠉ Se o jogador não for sobrenatural, aparecerá como “imune à sua investigação”.\n\n*"Eles não escondem o cheiro. Nem mesmo quando tentam parecer humanos."*' },
                    { name: '◆ Ativa "Caçada Sagrada"', value: '➥ Você pode atacar diretamente 1 jogador à sua escolha, mas o resultado depende da natureza da vítima:\n᠉ Se o jogador for da facção Civilização, você comete suicídio por culpa e morre também.\n᠉ Se o jogador for da facção Eloquentes, você perde todas as suas habilidades e se torna um Civil comum (sem passivas ou ativas).\n᠉ Se o jogador pertencer a qualquer outra facção que não seja Sobrenatural, o ataque é automaticamente anulado.\n᠉ Se o jogador possuir a tag "Sobrenatural", ele morrerá instantaneamente, mesmo que tenha qualquer tipo de defesa, incluindo defesas absolutas.\n\n*"Não é justiça. É necessidade."*' },
                    { name: '◆ Passiva "Benção da Extinção"', value: '➥ Se todos os jogadores com a tag "Sobrenatural" forem eliminados e você ainda estiver vivo, você recebe uma Benção Divina Permanente: Torna-se completamente imune a qualquer efeito noturno (morte, controle, maldições, investigações, selos etc). Também se torna imune a assassinatos diretos, exceto aquelas com a descrição: “Ignora qualquer tipo de defesa ou imunidade”.\n\n*"Quando o último monstro cair, meu juramento estará cumprido. E só então descansarei."*' }
                ]
            },
            {
                name: 'Trapaceiro',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Reflexo Perverso"', value: '➥ Durante a noite, Trapaceiro pode marcar um jogador como alvo de sua distorcida proteção.\nTodas as habilidades usadas contra esse jogador serão refletidas contra quem as lançou.\nExemplo: Se um assassino tentar matar o alvo marcado, o assassino se mata.\n➥ A habilidade reflete apenas a primeira ação recebida pelo alvo naquela noite. Ações subsequentes contra o mesmo alvo não são bloqueadas nem refletidas.\n➥ Trapaceiro pode usar essa habilidade uma única vez em si mesmo. Nesse uso especial, ele não apenas reflete a primeira habilidade recebida, como também a furta temporariamente, podendo usá-la no turno seguinte contra qualquer inimigo. (Após o uso, ela é descartada.)\n\n*"Você pode até mirar em mim... mas certifique-se de não estar mirando no espelho."*' }
                ]
            },
        ]
    },
 eloquentes: {
        name: "Eloquentes",
        emoji: "🩸",
        color: 0xE74C3C, // Vermelho
        characters: [
            {
                name: 'Matriarca',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Trono das Almas"', value: '➥ Um vínculo invisível une todos os Eloquentes à Matriarca. Cada vez que um deles morre, sua habilidade é absorvida por ela. Ela pode acumular várias habilidades, mas só consegue utilizar uma por vez. Importante: passivas não são herdadas.\n\n*“Patético!”*' },
                    { name: '◆ Passiva: "O Fardo Imortal"', value: '➥ A Matriarca é imune a qualquer tentativa de assassinato noturno, incluindo venenos, tiros e habilidades letais. A única maneira de eliminá-la é por meio da forca durante o dia. Quando alguém tenta matá-la, todos recebem um aviso público: Ex; "O assassino tentou matar a Matriarca... e falhou."\n\n*"Não é bênção… é a maldição de jamais cair enquanto o mundo insiste em me temer."*' },
                    { name: '◆ Ativa: "O Julgamento da Deusa Silenciosa"', value: '➥ Essa habilidade só pode ser usada durante o dia se a Matriarca for levada à forca. Após seu momento de defesa, caso perceba que será condenada, ela pode se revelar como Matriarca e sacrificar um Eloquente. O jogador sacrificado morre imediatamente em seu lugar, e o voto da Matriarca passa a valer por dois votos (o dela e o do sacrificado). Esse ato pode virar o jogo — ou selar ainda mais sua ruína.\n\n*"O mundo não precisa de heróis. Precisa de silêncio. E eu serei o eco final."*' }
                ]
            },
            {
                name: 'Assassino',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [ { name: '◆ ATIVA: “Espada do Vazio”', value: '➥ A cada noite, o Assassino pode escolher um jogador para matar. O ataque só falha caso o alvo possua algum tipo de proteção.\n\n*"Sirvo com a lâmina, falo com o corte. A voz da Matriarca é o único som que respeito."*' } ]
            },
            {
                name: 'Aprendiz',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Herança Sangrenta"', value: '➥ Caso o Assassino seja eliminado, o Aprendiz automaticamente assume seu lugar, herdando sua função. A partir disso, ele passa a executar assassinatos noturnos e, além disso, consegue ocultar a função do morto durante a mesma ação. Apenas o nome da vítima será revelado ao público.\n\n*"A lâmina caiu... mas a mão que a segura continua firme."*' },
                    { name: '◆ Ativa: "Silêncio a Dois"', value: '➥ Trabalhando em sincronia com o Assassino, o Aprendiz pode, durante a noite, ocultar a função da vítima. Para isso, ele deve declarar a ocultação no mesmo turno em que o Assassinato ocorrer. A função e os poderes do morto serão ocultados de todos — exceto do próprio Aprendiz, que recebe essa informação diretamente.\n\n*"Nem todo segredo está enterrado com o corpo."*' }
                ]
            },
            {
                name: 'Calígra',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Mandato do Silêncio"', value: '➥ Durante a noite, Calígra pode silenciar 1 jogador. O silenciado não pode realizar ações diretas, como votar ou usar sua função, enquanto o efeito durar.\n➥ O silêncio dura até o final do turno seguinte (ex: silenciado na noite N1, recupera a fala na noite N2).\n➥ Se o jogador silenciado tentar agir ou falar em público, morre instantaneamente.\n➥ Jogadores com proteção são imunes ao efeito.\n➥ Calígra é imune a qualquer habilidade que tente silenciá-la.\n\n*"Algumas verdades só se revelam quando cessam as vozes."*' },
                    { name: '◆ Passiva: "Eco Terminal"', value: '➥ Caso o Assassino e o Aprendiz morram, Calígra assume o papel de execução noturna.\n➥ Porém, ela só pode matar alvos que já tenham sido silenciados por ela anteriormente.\n➥ Isso torna cada escolha de silêncio uma preparação para a morte — sutil e planejada.\n\n*"A morte não chega com palavras, mas com a ausência delas."*' }
                ]
            },
            {
                name: 'Mirax',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [ { name: '◆ Ativa: "Máscara de Mirax"', value: '➥ Durante a noite, Mirax pode disfarçar um membro da máfia (incluindo ele mesmo), fazendo com que, ao ser investigado, o jogador pareça pertencer a outra função escolhida por Mirax.\n➥ Se o detetive ou qualquer habilidade de revelação investigar o alvo, verá a função falsa definida por Mirax.\n➥ A habilidade não remove ou altera os poderes reais do jogador, apenas sua identidade investigável.\n➥ O disfarce dura até ser substituído por outro ou até o alvo morrer.\n➥ Pode ser usado uma vez por noite.\n\n*“Você não precisa ser alguém... quando pode ser todo mundo.”*' } ]
            }
        ]
    },
    nomades: {
        name: "Nômades",
        emoji: "🐾",
        color: 0x2ECC71, // Verde
        characters: [
            {
                name: 'Palhaxota',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Última Gargalhada"', value: '➥ Se Palhaxota for executada pela votação durante o Dia (forca), ela poderá escolher um dos jogadores que votaram nela para morrer junto imediatamente.\n\n*"Se vou cair... que ao menos arraste um tolo comigo!"*' },
                    { name: '◆ Ativa: "Marca do Bufão"', value: '➥ Durante a primeira noite, Palhaxota pode marcar secretamente um jogador como seu "Alvo do Caos". Esse alvo permanece fixo durante toda a partida.\n➥ Se, ao longo dos Dias, Palhaxota conseguir manipular os votos para que o seu alvo seja enforcado — ela vence instantaneamente o jogo, e todos os outros perdem.\n\n*"A plateia é meu tabuleiro. As peças, seus corações."*' },
                    { name: '◆ Efeito Pós-Morte Noturna: "Carnaval do Caos"', value: '➥ Se Palhaxota morrer durante a Noite (por ação de assassinato, maldição, etc.), ela desencadeará o Carnaval do Caos:\n➥ Três jogadores aleatórios terão suas identidades reveladas publicamente imediatamente no amanhecer seguinte.\n\n*"De onde vim, o silêncio não existe... e o segredo é a primeira vítima."*' }
                ]
            },
            {
                name: 'Hush',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Silêncio Escolhido"', value: '➥ Durante cada noite, Hush escolhe uma palavra para amaldiçoar. Se algum jogador pronunciar essa palavra — ou qualquer sinônimo ou variação dela — durante o dia, o efeito é imediato: o jogador morre.\n\n᠉ Apenas uma palavra pode ser amaldiçoada por vez.\n᠉ É necessário registrar a palavra com quem estiver mestrando a partida.\n\n*"No meu mundo, até as palavras pagam o preço por existir."*' },
                    { name: '◆ Ativa: "Voto Mudo"', value: '➥ Durante o dia, qualquer jogador que permanecer em absoluto silêncio — sem dizer uma única palavra — torna-se vulnerável à influência de Hush. Ela pode controlá-lo: usar seu corpo como escudo contra a morte, ou acionar sua habilidade ativa conforme desejar.\n\n᠉ O jogador controlado pode ser sacrificado para impedir que Hush morra.\n᠉ Hush pode usar as habilidades ativas do jogador controlado.\n᠉ Consulte quem estiver mestrando a partida para confirmar se o jogador é válido como alvo.\n\n*"O silêncio é uma oração. E eu sou a Deusa que a responde."*' }
                ]
            },
            {
                name: 'Huesa',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Círculo das Almas"', value: '➥ A cada jogador morto (seja por assassinato ou forca), Huesa acumula +1 voto adicional.\n➥ Ao atingir 10 votos acumulados, Huesa pode escolher entre:\n↳ Ganhar uma vida extra, exigindo ser morta duas vezes.\n↳ Adquirir a habilidade de um jogador morto (caso conheça o poder da vítima).\n➥ Votos acumulados não podem ser bloqueados.\n\n*"Quanto mais morrem, mais viva eu me torno."*' },
                    { name: '◆ Ativa: "Marca dos Cravos"', value: '➥ Na primeira noite, Huesa pode marcar um jogador e criar um vínculo com ele.\n➥ Esse jogador recebe 3 votos secretos concedidos por Huesa.\n➥ Se ele morrer, Huesa herda seus poderes e os 3 votos voltam para ela.\n➥ A marca não pode ser removida por proteções convencionais (embora possa haver exceções especiais).\n\n*"Com um beijo silencioso, escolho quem florescerá... e quem murchará por mim."*' },
                    { name: '◆ Condição de Vitória', value: 'Huesa pode vencer sozinha caso restem apenas Nômades em jogo e todas as facções tenham sido eliminadas.\n\n*"A morte me beijou... e agora dançamos juntas."*' }
                ]
            },
            {
                name: 'Testemunha',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Visão do Fim"', value: '➥ Todos os jogadores que executarem ações (hostis ou não) contra a Testemunha Sombria terão sua identidade revelada para ela.\n➥ Se a Testemunha for assassinada durante a noite, a identidade do assassino será revelada publicamente no início do próximo dia.\n➔  Essa revelação ignora qualquer efeito que impeça identificação ou rastreamento.\n\n*“Você pode me atacar... mas lembre-se: eu já vi seu rosto.”*' },
                    { name: '◆ Ativa: "Reflexo Quebrado"', value: '➥ A cada noite, a Testemunha pode escolher um jogador e tentar revelar sua identidade publicamente. Se o alvo possuir alguma proteção contra esse tipo de revelação, a tentativa falhará — tanto para o público quanto para a Testemunha.\n\n*“Os rostos que vejo... nem sempre pertencem aos vivos.”*' }
                ]
            }
        ]
     },
    killer: {
        name: "Killer",
        emoji: "🔪",
        color: 0xE67E22, // Laranja
        characters: [
            {
                name: 'Serial Killer',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Incisão Precisa"', value: '➥ Todas as noites, o Serial Killer pode realizar um ataque direto contra um jogador. Esse ataque visa matá-lo de forma imediata, mas pode ser bloqueado por habilidades de proteção, defesa ou interferência externa.\n\n*"Não é sobre matar. É sobre tirar do caminho."*' },
                    { name: '◆ Passiva: "Sede de Sangue" (LUA CHEIA)', value: '➥ Se o Serial Killer conseguir matar dois jogadores em duas noites diferentes de forma consecutiva, ele entra em Sede de Sangue. Durante a noite em que essa condição estiver ativa, o ataque do Serial Killer se torna em cadeia:\n᠉ Se o alvo da noite interagir com alguém (usando ou recebendo uma habilidade), essas pessoas também morrerão.\n᠉ A Sede de Sangue também é ativada automaticamente em noites de Lua Cheia, mesmo sem matar dois jogadores antes.\n\n*"Quando o instinto desperta, não há volta."*' },
                    { name: '◆ Passiva: "Ausência de Vulnerabilidade"', value: '➥ O Serial Killer é imune a ataques diretos, como envenenamentos ou habilidades letais comuns. Apenas habilidades que possuem efeitos especiais ou condições exclusivas podem afetá-lo. Ou seja, a maioria dos ataques diretos falha contra ele — ele sente o perigo antes que ele chegue.\n\n*"Você não pode tocar o que não sente."*' }
                ]
            },
            {
                name: 'Cinza',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Fragmento das Chamas”', value: '➥ A cada noite, Cinza pode marcar um jogador com um Fragmento das Chamas, uma marca visível e externa. O alvo saberá que foi marcado, podendo tentar se livrar disso com habilidades curativas específicas ou mecânicas de proteção avançada. Essa marca é o prelúdio de algo muito pior... uma sentença silenciosa.\n\n*"É só um toque... mas já é tarde demais."*' },
                    { name: '◆ Passiva: “Aspecto das Cinzas”', value: '➥ Durante a noite, Cinza não pode ser morta. Seu corpo se desfaz e assume a forma etérea das próprias cinzas, tornando-a intocável. Porém, essa transformação tem um custo: todos que a visitarem durante a noite são marcados automaticamente com uma versão interna da marca — invisível, indetectável e silenciosa. Nem o próprio marcado saberá que carrega uma fagulha pronta a se tornar um incêndio.\n\n*"Cinzas não sangram. Cinzas não morrem."*' },
                    { name: '◆ Ativa: “Purificação Abrasadora”', value: '➥ Em qualquer momento da partida, Cinza pode evaporar todos os jogadores marcados — tanto os marcados por fragmentos externos quanto aqueles com a marca interna. Esse ataque é inevitável e fatal: não existe defesa, imunidade ou salvação. Os corpos queimam. As almas evaporam. Jogadores eliminados por essa habilidade não podem ser ressuscitados por nenhum meio, pois sua existência é removida do ciclo do jogo.\n\n*"Do pó ao nada... e nem o pó restará."*' }
                ]
            },
            {
                name: 'Lethal',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Zona Minada”', value: '➥ Durante a noite, Lethal pode armar uma armadilha na casa de um jogador. Se o alvo realizar qualquer tipo de ação naquela noite, ele será atacado e possivelmente eliminado (ataque básico — algumas defesas podem impedir). A presença da armadilha é pública e visível. Caso a armadilha permaneça por duas noites seguidas sem ser removida, o jogador morre automaticamente. Armadilhas podem ser neutralizadas com habilidades de proteção ou limpeza.\n\n*"Movimento em falso. Explosão certeira."*' },
                    { name: '◆ Ativa: “Olhos de Caçadora”', value: '➥ Na mesma noite em que colocar ou não uma armadilha, Lethal pode ativar seus sentidos ao máximo e observar um jogador. Ela detecta todos que interagirem com aquele jogador, revelando as funções de cada um desses visitantes. No entanto, não descobre a função do jogador observado diretamente.\n\n*"Fico no escuro… mas vejo quem se aproxima."*' },
                    { name: '◆ Ativa: “Encosto Mortal”', value: '➥ Caso não deseje colocar uma armadilha, Lethal pode visitar um jogador e ocultar-se ao lado dele. Se alguém tentar atacá-lo ou afetá-lo de qualquer forma, Lethal poderá intervir e matar o invasor — apenas um alvo por noite.\n\n*"Se você encostar no meu alvo… eu encosto no seu caixão."*' },
                    { name: '◆ Ativa: “Isca Armadilhada”', value: '➥ Lethal pode ativar até três armadilhas em si mesma durante a partida. Quando uma armadilha estiver ativa, qualquer um que tentar visitá-la será atacado automaticamente e possivelmente eliminado.\n\n*"Chegar perto de mim nunca foi uma boa ideia."*' },
                    { name: '◆ Passiva: “Contrato de Sangue”', value: '➥ Lethal pode revelar sua identidade a qualquer momento. Ao fazer isso, ela torna-se elegível para ser contratada por qualquer jogador ou facção, incluindo até mesmo isolados como o Serial Killer. Após escolher um aliado, ela se torna oficialmente uma parceira dele, colaborando com seus objetivos até o fim da partida. Essa escolha é definitiva — não pode ser revertida ou transferida. No dia da revelação, ela não pode ser morta por nenhum tipo de ação ou voto. Essa habilidade só pode ser usada uma única vez.\n\n*"Diga o preço... e a sua guerra passa a ser minha."*' }
                ]
            }
        ]
    },
    tormento: {
        name: "Tormento",
        emoji: "💀",
        color: 0x2C3E50, // Preto/Cinza muito escuro
        characters: [
            {
                name: 'Chef',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Banquete dos Últimos”', value: '➥ Durante a noite, você pode cozinhar para 1 jogador. Ele será publicamente anunciado como tendo recebido uma refeição do Chef. Nenhum efeito adicional ocorrerá nesse momento.\n\n*"Para alguns, um presente. Para outros, a última ceia."*' },
                    { name: '◆ Passiva: “O Jejum da Morte”', value: '➥ Após fornecer 4 refeições para 4 jogadores diferentes, o Chef desperta como o Tormento da Fome. A população é alertada: A Fome surgiu.\n➥ A partir desse ponto, todos os jogadores que nunca receberam uma refeição do Chef morrerão de fome na próxima noite, a menos que o Chef seja enforcado durante o dia seguinte.\n➥ Chef não tem vitória própria. Ele serve como suporte para que outro Tormento alcance a vitória. Seu único propósito é espalhar o colapso.\n\n*"Aqueles que não provaram minha comida... serão provados pela fome."*' }
                ]
            },
            {
                name: 'Vírus',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Contágio Silencioso”', value: '➥ Durante a noite, você pode visitar alguém para Infectá-lo com a Peste.\n➥ Qualquer jogador que visite ou seja visitado por um Infectado torna-se Infectado também.\n➥ Qualquer jogador que visitar você será automaticamente Infectado.\n➥ Os jogadores não são informados quando são Infectados.\n\n*“A morte não precisa gritar. Ela se espalha em silêncio.”*' },
                    { name: '◆ Passiva: “Hospedeiro Imortal”', value: '➥ Você é imune a habilidades negativas — tanto durante o dia quanto à noite.\n➥ Ao Infectar cinco jogadores, um aviso é emitido: "A PESTE SURGIU".\n➥ A partir disso, qualquer tentativa de assassinato contra você durante a noite pode ser bloqueada sacrificando um jogador Infectado aleatório no seu lugar.\n\n*“Sou apenas um corpo... mas minha doença é eterna.”*' },
                    { name: '◆ Passiva: “Surto Epidêmico”', value: '➥ Após Infectar cinco pessoas, você pode ativar o Surto.\n➥ Você se torna a PESTE: qualquer jogador que votar em você durante o dia também será Infectado.\n➥ A qualquer momento, você pode evoluir o vírus, matando todos os Infectados de uma vez.\n➥ A única forma de eliminar você a partir daí é votando para linchamento durante o dia. Porém, com sua morte não existe cura, e todos infectados também morreram.\n\n*“O mundo não morrerá com fogo, mas tossindo sangue.”*' }
                ]
            },
            {
                name: 'Berserker',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “A Primeira Lua” (LUA CHEIA)', value: '➥ No início do jogo, Berserker é um homem comum — frágil, um alvo fácil. Porém, com sua permanência na partida, uma lua cheia ascende. A partir dessa noite, Berserker adquire o direito de matar. Seu ataque pode ser anulado por defesas ou habilidades protetivas. É o primeiro rugido da fera.\n\n*“A lua cheia não nasce para iluminar… ela nasce para anunciar.”*' },
                    { name: '◆ Passiva: “Instinto Acumulado”', value: '➥ Após seu primeiro ataque bem-sucedido, Berserker começa a acumular força. No segundo ataque bem-sucedido, sua fúria transborda: ele ignora defesas, imunidades ou habilidades de proteção. Apenas avança, destroçando seu alvo.\n\n*“O sangue derramado é apenas o primeiro passo.”*' },
                    { name: '◆ Passiva: “Manifestação Bélica”', value: '➥ Quando Berserker executa sua terceira morte, ele se torna invencível durante as noites.\nDurante esse estado:\n᠉ Ele é imune a qualquer tipo de ataque ou habilidade noturna.\n᠉ Qualquer um que o visitar morre automaticamente, sem exceções. É o despertar total da entidade conhecida apenas como Guerra.\n\n*“Eu não sou mais um homem. Eu sou o próprio conflito.”*' },
                    { name: '◆ Ativa: “Lua Rubra” (LUA CHEIA)', value: '➥ Após atingir seu auge (terceira morte), uma nova lua cheia ascende.\nNessa noite específica, Berserker pode escolher até 3 alvos para eliminar.\nNada os salva. Nenhuma proteção, defesa ou milagre impede a chacina.\nÉ a noite em que o mundo conhece o preço de deixá-lo viver.\n\n*“O céu sangra... e três cairão.”*' }
                ]
            },
            {
                name: 'Necromante',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Condutor de Almas Perdidas"', value: '➥ Durante a noite, a Necromante pode reviver um jogador morto. O jogador retorna sob controle dela, mantendo suas habilidades e votos. A Necromancer pode ter até dois revividos ativos, que se comunicam livremente, mas não sabem quem é sua mestra. Ela pode usá-los como marionetes, influenciando sutilmente o jogo. (Passivas de defesa dos mortos vivos são anuladas)\n\n*"Todo corpo é uma lembrança... e toda lembrança, uma arma."*' },
                    { name: '◆ Passiva: "Herdeira do Além"', value: '➥ Ao ser morta, a Necromante não desaparece. Ela entra no mundo dos mortos e, após dois turnos, renasce no corpo de um Civil ou Eloquente, herdando seus poderes e controlando-os em segredo. O jogador possuído age normalmente, mas perceberá que algo o manipula. A identidade da Necromante permanece oculta é o jogador possuído pode revelar que está sendo controlado. Após sua ressurreição, ela pode sacrificar seus mortos para anular ataques contra ela.\n\n*"A morte é apenas o intervalo entre dois respiros."*' },
                    { name: '◆ Ativa: "Vozes do Além"', value: '➥ Enquanto estiver no mundo dos mortos (após ser eliminada), a Necromante ainda pode controlar os mortos que reviveu antes de morrer, agindo através deles durante a noite. Contudo, não poderá reviver novos corpos enquanto estiver nesse estado. Os revividos tornam-se criaturas sobrenaturais, reconhecíveis por comportamentos estranhos, porém ainda com livre-arbítrio — até ela desejar o contrário.\n➥ Mortos-Vivos são Sobrenaturais\n\n*"Mesmo em silêncio... eles escutam o meu comando."*' }
                ]
            }
        ]
    },
    sobrenaturais: {
        name: "Sobrenaturais",
        emoji: "👻",
        color: 0xF1C40F, // Amarelo
        characters: [
            {
                name: 'Vampira',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Beijo da Rainha"', value: '➥ Durante a noite, Vampira pode morder 1 jogador da Civilização, Eloquentes ou Nômades. O alvo mordido tem 2 turnos para ser curado. Se isso não acontecer, ele se transforma em um vampiro, ingressando na Legião, a facção da Vampira. Os vampiros transformados mantêm suas habilidades anteriores, mas devem obedecer cegamente à Vampira. Os transformados servem como sacrifícios, caso vampira for a mais votada durante o dia.\n\n*“Seu sangue agora canta por mim.”*' },
                    { name: '◆ Passiva: "Sombra Inquebrável"', value: '➥ Vampira é invulnerável a qualquer ataque noturno. Apenas o Hunter conhece um método capaz de eliminá-la. Ela ainda pode ser investigada normalmente, revelando sua natureza e papel.\n\n*“Nada na escuridão me ameaça. Eu sou a escuridão.”*' },
                    { name: '◆ Passiva: "O Primogênito"', value: '➥ O primeiro vampiro transformado se torna o Primogênito, ganhando habilidades únicas:\n➥ Pulso de Transformação: Uma vez por jogo, ele pode transformar todos os mordidos instantaneamente, ignorando o tempo de espera.\n➥ Sede da Vingança (Passiva): Qualquer jogador da Civilização, Nômades ou Eloquentes que atacar ou investigar a Vampira será automaticamente mordido pelo Primogênito.\n➥ Se o Primogênito morrer, o segundo transformado herda todas as suas habilidades.\n\n*“O sangue dele carrega meu legado. E minha maldição.”*' },
                    { name: '◆ Regras da Legião', value: '➥ Se Vampira for eliminada, todos os vampiros da Legião morrem instantaneamente.\n➥ Mortos-vivos, Killers e outros Sobrenaturais são imunes à mordida.\n➥ Vampiros transformados não podem trair a Vampira, mesmo sob coação ou manipulação.' }
                ]
            },
            {
                name: 'Marionetista',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Fios da Vontade"', value: '➥ Durante a noite, a Marionetista pode escolher dois jogadores. As ações que um faria serão trocadas com o outro (exemplo: se A ia investigar B, e B ia proteger C, então A irá proteger C e B investigará B). Só pode usar essa habilidade 3 vezes por partida. Ela ignora proteções.\n\n*"Todos se acham livres... até eu puxar."*' },
                    { name: '◆ Passiva: "Olhos de Porcelana"', value: '➥ A Marionetista sempre sente quando é alvo de qualquer ação (proteção, ataque, investigação etc.), mesmo que ela não surta efeito.\n\n*"Mesmo quando não sou tocada, sinto o tremor nos fios."*' }
                ]
            },
            {
                name: 'Ghost',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Tomar o Vazio"', value: '➥ Durante a partida, o Fantasma pode possuir até 3 corpos diferentes, vivos ou mortos (exceto seres que têm conexão direta com a morte, como necromantes ou afins).\n➥ Ao possuir alguém, ele assume completamente o controle daquele corpo, podendo usar as habilidades e interagir como se fosse o jogador original.\n➥ A posse dura até ele ser morto novamente naquele corpo, seja por eliminação, voto ou habilidade.\n➥ Se o corpo possuído for destruído, ele deve imediatamente escolher outro, se ainda tiver posses restantes.\n➥ Caso suas 3 posses forem gastas e ele morrer nas três: o Ghost desaparece para sempre da partida.\n➥ O Fantasma não é aliado de ninguém — seu objetivo é vencer sozinho, usando estratégia e manipulação nos corpos que habita. Ele pode trair, ocultar ou eliminar conforme quiser.\n\n*"A morte me levou... mas não me manteve."*' }
                ]
            },
            {
                name: 'Lobisomem',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Passiva: "Maldição da Noite"', value: '➥ Durante todas as noites, o Lobisomem é imortal. Nenhum ataque pode matá-lo, a não ser que o Hunter o ataque diretamente. Durante essas noites, ele vagueia livremente entre presas e predadores, sem temer armadilhas ou emboscadas.\n\n*“Você pode ouvir meus passos… mas não pode detê-los.”*' },
                    { name: '◆ Passiva: "Marca do Predador"', value: '➥ Durante o dia, caso o Lobisomem seja votado por alguém (jogador X), ele poderá atacar X abertamente durante a noite seguinte. Se qualquer outra pessoa tentar interagir com a vítima marcada (X) — seja para protegê-la, curá-la ou investigar — essa pessoa também será morta.\n\n*“Você me caçou à luz do dia… agora é minha vez.”*' },
                    { name: '◆ Ativa: "Lua de Sangue" (LUA CHEIA)', value: '➥ Em noites de lua cheia, o Lobisomem entra em um estado de fúria total.\n➥ Ele pode matar mesmo jogadores com defesas poderosas ou habilidades protetivas ativadas.\n➥ Pode usar seu faro para farejar até 2 jogadores perigosos para ele, revelando se eles possuem habilidades ofensivas que podem ameaçá-lo (ex: Hunter, executores, caçadores de sobrenaturais).\n➥ Essa habilidade acontece automaticamente em noites de lua cheia, e não pode ser controlada ou evitada.\n\n*“Na lua cheia… o mundo pertence aos monstros.”*' }
                ]
            },
            {
                name: 'Serpentina',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: "Reflexo de Mármore"', value: '➥ Durante a noite, Serpentina pode ativar até 3 proteções simultâneas. Qualquer jogador que tentar atacá-la nessa noite será instantaneamente transformado em pedra.\nCada inimigo petrificado dessa forma se torna uma vida extra, que protege Serpentina de uma futura tentativa de morte.\n➥ Se ela não tiver vidas extras e estiver em alerta, o Hunter pode matá-la, pois ele conhece o método para burlar sua defesa.\n\n*“Olhe para mim... e veja seu fim eternizado.”*' },
                    { name: '◆ Ativa: "Toque Estético"', value: '➥ Cada noite, Serpentina pode visitar um jogador. Se ele não tiver defesa, será transformado em pedra, entrando para a sua coleção de estátuas vivas.\n➥ Esse jogador passará 1 dia e 1 noite petrificado, sem poder agir. Durante esse tempo, o petrificado serve como vida extra.\n➥ Se Serpentina visitar o mesmo jogador pela segunda vez, ele morrerá permanentemente — seu corpo não resistirá à segunda petrificação.\n\n*“Algumas formas... não nasceram para se mover.”*' }
                ]
            }
        ]
    },
     abyssal: {
        name: "Abyssal",
        emoji: "🔮",
        color: 0xFF1493, // Rosa Choque (DeepPink)
        characters: [
            {
                name: 'Bruxa',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Olho da Geena”', value: '➥ Durante o dia, em meio às discussões, você pode conjurar um um fogo infernal contra um jogador à sua escolha.\n➥ Se o jogador não possuir nenhuma defesa ativa, será imediatamente arrastado para o inferno.\n\n*"O mundo me queimou. Agora, eu ensino ele a gritar."*' },
                    { name: '◆ Ativa: “Ritual Sanguíneo”', value: '➥ Durante a noite, você pode realizar um ritual sombrio para tentar adivinhar o papel exato de um jogador.\n➥ Você possui 3 cargas dessa habilidade por partida.\n➥ Se acertar, o jogador será amaldiçoado, ignorando qualquer tipo de defesa.\n➥ Você poderá controlar esse jogador (inclusive suas habilidades ou ações).\n➥ Pode controlar até 3 simultaneamente.\n➥ Se errar, você perde uma carga. Se errar todas, sua identidade será revelada publicamente.\n\n*"O sangue sabe. O sangue fala. O sangue toma."*' },
                    { name: '◆ Passiva: “Véu dos Condenados”', value: '➥ Durante a noite, você evita todas as interações, exceto aquelas que podem matar você diretamente.\n\n*"Não se toca o que já está do outro lado."*' }
                ]
            },
            {
                name: 'Lover',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Laço Profano”', value: '➥ Duas vezes por partida, durante o dia, você pode selecionar um jogador e criar um vínculo amoroso com ele.\n\nEsse vínculo permite:\n➥ Copiar as habilidades do jogador vinculado.\n➥ Se o jogador morrer, você herda suas habilidades permanentemente.\n➥ Você pode usar essa estratégia também com membros da Abyssal, como forma de desviar suspeitas ou proteger aliadas.\n\n*"Você se rendeu ao amor… mas era eu quem conduzia a dança."*' }
                ]
            },
            {
                name: 'Faker',
                image: 'https://i.imgur.com/placeholder.png',
                abilities: [
                    { name: '◆ Ativa: “Espelho da Falsidade”', value: '➥ Durante a noite, Faker pode manipular até 3 informações distintas:\n➥ Enviar informações falsas a jogadores (exceto sobre mortes e fenômenos).\n➥ Falsificar a função de um jogador morto durante o dia, após coletar sua verdadeira identidade.\n➥ Alterar sua própria função visível ou a de outros membros da Abyssal, confundindo investigações e julgamentos.\n\n*"Não é preciso ser a verdade… basta parecer irresistível."*' },
                    { name: '◆ Passiva: “Máscara Inviolável”', value: '➥ Durante a noite, Faker é imune a qualquer habilidade que não seja letal. Além disso:\n➥ Se alguém tentar investigá-la, receberá uma informação falsa, cuidadosamente fabricada por ela.\n➥ A identidade de quem tentou investigá-la será revelada a Faker.\n\n*"Espionar uma sombra… é só um jeito elegante de se perder nela."*' }
                ]
            }
        ]
    }
};

module.exports = { factionsData };
