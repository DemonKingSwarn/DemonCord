const Discord = require('discord.js')

exports.run = (client, message, args) => {
	let embed = new Discord.MessageEmbed()
	 .setColor("WHITE")
	 .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
	 .addField("Owner", message.guild.owner, true)
	 .addField("Channels", message.guild.channels.cache.size, true)
	 .addField("Roles", message.guild.roles.cache.size, true)
	 .addField("Emojis", message.guild.emojis.cache.size, true)
	 .addField("Verification Level", message.guild.verificationLevel, true)
	 .addField("Region", `${message.guild.region}`, true)
	 .addField("Members", `Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
	 .setThumbnail(message.guild.iconURL({ dynamic: true }))
	 .setFooter(`ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)

 message.channel.send(embed)

}

exports.name = "serverinfo"
