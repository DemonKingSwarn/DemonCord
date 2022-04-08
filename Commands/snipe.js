const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
	let channel = message.mentions.channels.first() || message.channel
    let sniped = client.snipes.get(channel.id)
    if (!sniped) {
      message.channel.send(" :x: | There is nothing to snipe in " + channel.name)
    } else {
      let em = new Discord.MessageEmbed()
        .setAuthor(sniped.author.tag, sniped.author.displayAvatarURL())
        .setDescription(sniped.content)
        .setColor("GREEN")
        .setTimestamp()
      if (sniped.image) {
        em.setThumbnail(sniped.image)
      }
      message.channel.send(em)
    }
}

exports.name = "snipe"
