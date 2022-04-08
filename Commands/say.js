exports.run = (client, message, args) => {
	let toSay = args.join(" ")
	if(!toSay) return message.channel.send("You have to provide something!")
	message.channel.send(toSay)
}

exports.name = "say"
