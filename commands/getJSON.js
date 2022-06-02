const { MessageAttachment } = require("discord.js");

module.exports.run = async(client, message, args, splittato, collected) =>{
    if(!message.member.permissions.toArray().includes('ADMINISTRATOR')){
        message.author.send("You're not an administrator")
        return;
    }

    let JSONfile = new MessageAttachment('./collected.json')
    message.author.send({files: [JSONfile]})
    .catch(console.error);
    message.delete()
}