const fs = require('fs');
module.exports.run = async(client, message, args, splittato, collected) =>{
    if(!message.member.permissions.toArray().includes('ADMINISTRATOR')){
        message.author.send("You're not an administrator")
        return;
    }

    if(!args[splittato ? 2 : 1].startsWith("0x") || args[splittato ? 2 : 1].length != 42){
        message.author.send('Please provide a correct address')
        return;
    }

    let deleted = null;

    for(let i = 0; i < collected.length; i++){
        if(message.author.tag == collected[i].user || args[splittato ? 2 : 1] == collected[i].address){
            if(i != collected.length - 1) collected[i] = collected[collected.length - 1];
            deleted = collected.pop();
            break;
        }
    }
    if(deleted){
        fs.writeFileSync('./collected.json', JSON.stringify(collected,null,1))
        message.author.send("User deleted with username "+deleted.user)
    }
    else message.author.send("User not found")
}

//CREATE A CHECK TO SEE IF USER DMS ARE OPEN