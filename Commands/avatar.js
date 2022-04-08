const Discord = require('discord.js')

exports.run = (client, message, args) => {
	let theUser = message.mentions.users.first() || message.author
    let avemb = new Discord.MessageEmbed()
      .setTitle(theUser.tag)
      .setImage(theUser.displayAvatarURL({ size: 2048, dynamic: true }))
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(avemb)
}

exports.name = "avatar"
