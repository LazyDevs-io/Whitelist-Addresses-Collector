const fs = require('fs');
module.exports.run = async(client, message, args, splittato, collected) =>{
    message.delete()
    let config = JSON.parse(fs.readFileSync('./config.json').toString());
    if(config.command_channel == "disabled"){
        message.author.send("This action is not active")
        return;
    }
    if(message.channel.id != config.command_channel){
        message.author.send("This is not the channel to do this")
        return;
    }
    if(!args[splittato ? 2 : 1].startsWith("0x") || args[splittato ? 2 : 1].length != 42){
        message.author.send('Please provide a correct address')
        return;
    }

    for(let i = 0; i < collected.length; i++){
        if(message.author.tag == collected[i].user || args[splittato ? 2 : 1] == collected[i].address){
            message.author.send('You are already registered')
            return;
        }
    }
    
    collected.push({
        user: message.author.tag,
        address: args[splittato ? 2 : 1]
    })

    fs.writeFileSync('./collected.json', JSON.stringify(collected,null,1))
    message.author.send("You've registered")
}