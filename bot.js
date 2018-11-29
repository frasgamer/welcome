client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516267367714783237");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`welcome in the server [user] [member] :heart:`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
