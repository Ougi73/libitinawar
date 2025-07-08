// Importa as bibliotecas necessárias
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');

// Configura o dotenv para carregar as variáveis de ambiente do arquivo .env
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Cria uma nova instância do Cliente (o seu bot)
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Cria uma coleção para armazenar seus comandos
client.commands = new Collection();

// -- Carregamento Dinâmico dos Comandos --
// Define o caminho para a pasta 'commands'
const commandsPath = path.join(__dirname, 'commands');
// Lê todos os arquivos da pasta que terminam com .js
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Itera sobre cada arquivo de comando
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Verifica se o comando tem as propriedades 'data' e 'execute'
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        console.log(`[SUCESSO] O comando ${command.data.name} foi carregado.`);
    } else {
        console.log(`[AVISO] O comando em ${filePath} está faltando a propriedade "data" ou "execute".`);
    }
}

// --- Eventos do Bot ---

// Evento que é executado uma vez quando o bot está pronto e online
client.once(Events.ClientReady, c => {
    console.log(`Pronto! Logado como ${c.user.tag}`);
});

// Evento que é executado toda vez que uma interação é criada (ex: um comando é usado)
client.on(Events.InteractionCreate, async interaction => {
    // Ignora interações que não são comandos de chat (slash commands)
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    // Se o comando não for encontrado, informa no console
    if (!command) {
        console.error(`Nenhum comando correspondente a ${interaction.commandName} foi encontrado.`);
        return;
    }

    // Bloco Try...Catch para executar o comando e tratar possíveis erros
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);

        // --- BLOCO CATCH ATUALIZADO ---
        // Verifica se a interação já foi respondida ou deferida
        if (interaction.replied || interaction.deferred) {
            // Se já foi, usa .followUp para enviar uma nova mensagem de erro
            await interaction.followUp({ content: 'Ocorreu um erro ao executar este comando!', flags: [MessageFlags.Ephemeral] });
        } else {
            // Se não, usa .reply para dar a primeira resposta
            await interaction.reply({ content: 'Ocorreu um erro ao executar este comando!', flags: [MessageFlags.Ephemeral] });
        }
    }
});

// Faz o login do bot no Discord usando o token
client.login(token);