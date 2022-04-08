exports.run = (client, message, args) => {
	let name = args[0]
    let link = args[1]
    if (!name) return message.channel.send("`-emoji [name] [link]` is the correct method")
    if (!link) return message.channel.send("`-emoji [name] [link]` is the correct method")
    message.guild.emojis.create(link, name)
    message.channel.send("✅ Emoji has been created")
}

exports.name = "emoji"
