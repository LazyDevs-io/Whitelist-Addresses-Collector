require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);
const fs = require('fs');
const path = require('path');
const commands = fs.readdirSync('./commands');
const PREFIX = '^'
let commandMap = new Map();


client.login(process.env.BOT_TOKEN);

client.on('ready',() =>{
    commands.forEach(command =>{
        if(command.endsWith('.js')){
            let commandName = command.substring(0,command.indexOf('.js'))
            let commandModule = require(path.join(__dirname, 'commands', command))
            commandMap.set(commandName,commandModule);
        }
    })
    console.log(commandMap);

    console.log('Running...')
})

client.on('messageCreate', message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(PREFIX)) return;

    let collected = JSON.parse(fs.readFileSync('./collected.json').toString());
    let args = message.content.split(' ')
    let cmdName;
    let splittato = false;

    if(args[0] != PREFIX){
        cmdName = args[0].substring(PREFIX.length);
    }
    else{
        cmdName = args[1];
        splittato = true;
    }

    if(commandMap.get(cmdName)) commandMap.get(cmdName).run(client, message, args, splittato, collected)
})