module.exports.run = (client, message, args) => {
	message.channel.send(message.guild.memberCount)
}

module.exports.name = "membercount"
