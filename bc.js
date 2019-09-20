const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bp")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Black panther`,"https://discord.gg/mrcuyQ")
client.user.setStatus("dnd")
});



client.login("NjI0NzM4MTA3MjAzMzg3NDEz.XYVYog.SrmGpro3sF7ZJs_3Ya27fgQAGao");
