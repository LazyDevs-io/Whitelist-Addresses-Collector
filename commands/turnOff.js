const fs = require('fs');
module.exports.run = async(client, message, args, splittato, collected) =>{
    if(!message.member.permissions.toArray().includes('ADMINISTRATOR')){
        message.author.send("You're not an administrator")
        return;
    }
    let config = JSON.parse(fs.readFileSync('./config.json').toString());
    config.command_channel = "disabled";
    fs.writeFileSync('./config.json', JSON.stringify(config,null,1))
    message.author.send("The register command has been disabled")
}