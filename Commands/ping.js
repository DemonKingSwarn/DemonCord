const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	let embed = new Discord.MessageEmbed()
      .setTitle("🏓 Pong!")
      .setDescription(`**${client.ws.ping}ms** Latency!`)
      .setColor("RANDOM")
      .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL()
      );
    message.channel.send(embed);
}

module.exports.name = "ping"
