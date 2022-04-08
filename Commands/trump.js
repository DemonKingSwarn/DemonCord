const Discord = require('discord.js')

exports.run = (client, message, args) => {
	let ans = ["FAKE MEDIA!!!","HETEROSEXUAL!!!","DEMOCRAT!!!","PUTIN!!!","RIGGED!!!"] //add more by doing ,["your answer"]
 	const qes = message.content.slice("".length).trim().split(/ +/);
	qes.shift().toLowerCase().split(" ")[0]
	const ans1 = ans[Math.floor(Math.random() * ans.length)]
	const qes1 = qes.join(" ")
	let embed = new Discord.MessageEmbed()
	.setTitle('Donald Trump')
	.setAuthor('Donald Trump', 'https://www.bing.com/th?id=AMMS_1d20efba2f4814cea746d4867a08766b&w=150&h=150&c=12&rs=1&o=5&pid=3.1&rm=2')
	.addField(
		`${qes1}`,
		`${ans1}`,
		true)
	.setColor("RANDOM")
	.setTimestamp()
	message.channel.send(embed);
}

exports.name = "trump"
