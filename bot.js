client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("514873591754522671");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`welcome in the server [user] :heart:`), 4000)        
}
});

client.on('ready', () => {
  client.user.setGame(`احبكم كلش`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});

client.login(process.env.BOT_TOKEN);
