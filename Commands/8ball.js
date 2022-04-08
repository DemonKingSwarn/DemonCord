const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
	 let replies = ["Yes", "No", "Maybe", "Not sure", "Shut up you rat!", "sure, why not", "when you grow a braincell, yes", "THAT'S A SOLID ****NO****", "Nah that sucks tbh"]
    let randomized = replies[Math.floor(Math.random() * replies.length)]
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    if (!sentence) message.reply("WHAT DO YOU WANT TO ASK 8BALL?")
    let embed = new Discord.MessageEmbed()
      .setTitle("8Ball")
      .addField("Your Question", `${sentence}`)
      .addField("8Ball:", `${randomized}`)
      .setColor("RANDOM")
      .setFooter(" ")
    message.channel.send(embed)
}

module.exports.name = "8ball"
