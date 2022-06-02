const fs = require('fs');
module.exports.run = async(client, message, args, splittato, collected) =>{
    if(!message.member.permissions.toArray().includes('ADMINISTRATOR')){
        message.author.send("You're not an administrator")
        return;
    }
    if(message.mentions.channels.size == 0){
        message.author.send("No channel specified")
        return;
    }
    let config = JSON.parse(fs.readFileSync('./config.json').toString());
    let newChannel = message.mentions.channels.first();
    if(message.guild.members.cache.get(client.user.id).permissionsIn(newChannel).has('VIEW_CHANNEL')){
        config.command_channel = newChannel.id;
        fs.writeFileSync('./config.json', JSON.stringify(config,null,1))
        message.author.send("Channel set with ID: "+newChannel.id)
    }
    else{
        message.author.send("I can't see that channel")
        return;
    }
}