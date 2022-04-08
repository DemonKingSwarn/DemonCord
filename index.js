const Discord = require("discord.js");
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client();
client.snipes = new Discord.Collection
const app = require("express")()
const axios = require("axios")
const fs = require("fs")
const { inspect } = require("util");

const port = 3000
app.get('/', (req, res) => res.send('Hey there!'))
app.listen(port, () =>
  console.log('Your app is listening at http://localhost:${port}')
);
let hasUsed = false
const ping = () => {
  axios.get("https://DiscordBotByDemon.demonkingswarn1.repl.co")
}

setInterval(() => {
  ping()
}, 3000)
client.on("ready", () => {
  console.log("ready");
  client.user.setPresence({
    activity: { name: "-help || Created By DemonKingSwarn" },
    status: "online"
  });

});

client.on('ready', async (ready) => {
  setInterval(() => {
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330;   // IST offset UTC +5:30 

    let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    var hoursIST = ISTTime.getHours()
    var minutesIST = ISTTime.getMinutes()
    console.log(hoursIST + ':' + minutesIST)
    if (hoursIST === 22 && minutesIST === 00) {

      const getYoutubeSubscriber = require('getyoutubesubscriber')
      getYoutubeSubscriber('UCC1yT9JzYwz6dDwLM-KWt0A').then((data) => {
        let te = new Discord.MessageEmbed()
          .setTitle("DemonKingSwarn's Subscribers")
          .setURL("https://www.youtube.com/channel/UCC1yT9JzYwz6dDwLM-KWt0A?view_as=subscriber")
          .setDescription(data.toLocaleString() + " Subscribers\n[Click Here To Subscribe](https://www.youtube.com/channel/UCC1yT9JzYwz6dDwLM-KWt0A?view_as=subscriber)")
          .setThumbnail("https://media.discordapp.net/attachments/832647534782447640/856085000490057778/DemonLogo-3.jpg?width=613&height=613")
          .setImage("https://media.discordapp.net/attachments/739345467199979572/775411393976598558/unknown.png")
          .setColor("RANDOM")
          .setFooter("SUBSCRIBE NOW IF YOU DIDN'T, IT'S FREE!!!")
        client.channels.cache.get("696719583461113936").send(te)
      });
    }
  }, 60000)

})

client.on('messageDelete', function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
	
  if(message.content.startsWith(prefix)) {
	const args = message.content.slice(prefix.length).trim().split(/ +/g)
	const commandName = args.shift()
	const command = client.commands.get(commandName)
	if(!command) return
	command.run(client, message, args)
  }
});

client.on('guildMemberAdd', async member => {
  if (member.guild.id !== '696705371083112488') return;
  let Canva = require('canvacord');
  let canva = require('canvacord');
  let img = await canva.welcomer({
    username: member.user.username,
    discrim: member.user.discriminator,
    avatarURL: member.user.displayAvatarURL({ dynamic: true, format: 'png' })
  });
  canva.write(img, 'img.png');
  let a = new Discord.MessageAttachment(img, 'welcome.png');
  client.channels.cache.get('696718367695962202').send(
    `━━━━━<a:RainbowLine:766660932767318046><a:RainbowLine:766660932767318046><a:RainbowLine:766660932767318046><a:RainbowLine:766660932767318046>━━━━━\n <a:welcome_red_1:766675598453768262><a:welcome_red_2:766675674748026922>\n Welcome <@${
    member.user.id
    }>\n━━━━━━━━━━━━━━━━━━━━\n<a:welcome_red_1:766675598453768262><a:welcome_red_2:766675674748026922>  Be sure to read <#752329160424423524> \n\nEnjoy your stay and have fun in my garden. \n\n **Now we have ${
    client.guilds.cache
      .get('696705371083112488')
      .members.cache.filter(r => !r.user.bot).size
    } Members** \n\n━━━━━━━━━━━━━━━━━━━━
`,
    a
  );
  member.roles.add('738204631901143070');
});
client.on('guildMemberRemove', member => {
  if (member.guild.id !== '696705371083112488') return;
  const channel = client.channels.cache.get('853305420982910976');
  channel.send(member.user.tag + " left :/")
})

client.on('guildMemberUpdate', (oldM, newM) => {
  if (oldM.guild.id !== '696705371083112488') return;
  console.log(oldM);
  console.log(newM);
  if (newM.nickname) {
    if (/^[a-zA-Z0-9- ]*$/.test(newM.nickname) == false) {
      client.channels.cache
        .get('696718850024276018')
        .send(
          ` ${newM} Please don't keep special characters in your nickname. We don't want to keep your name on top.`
        )
        .then(m => m.delete({ timeout: 5000 }));
      newM.user.send(
        "Please don't keep special characters in your nickname. We don't want to keep your name on top."
      );
      newM.setNickname(null);
    }
  }
});

client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
const prefix = "-"
for(file of commands) {
	const commandName = file.split(".")[0]
	const command = require(`./Commands/${commandName}`)
	client.commands.set(commandName, command)
}

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
  warnThreshold: 5,
  kickThreshold: 7,
  banThreshold: 8,
  maxInterval: 2000,
  warnMessage: '{@user}, Please stop spamming.',
  kickMessage: '**{user_tag}** has been kicked for spamming.',
  banMessage: '**{user_tag}** has been banned for spamming.',
  maxDuplicatesWarning: 7,
  maxDuplicatesKick: 10,
  maxDuplicatesBan: 12,
  exemptPermissions: ['ADMINISTRATOR'],
  ignoreBots: true,
  verbose: true,
  ignoredUsers: [],
  ignoredRoles: []
});

client.login(process.env.TOKEN)
