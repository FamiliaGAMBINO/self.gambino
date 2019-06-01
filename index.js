const Discord = require('discord.js');
const client = new Discord.Client();

client.login (process.env.TOKEN);

const activities_list = [
  "𝓦.𝓓.𝓢",
  "𝑨 𝑫𝑰𝑺𝑪𝑶𝑹𝑫 𝑻𝑬𝑨𝑴",
  "𝑶𝑭 𝑹𝑨𝑳𝑶𝑼𝑭𝑺",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index],{
            type: "LOOKING",
            url: "https://www.twitch.tv/evil"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
    console.log('Connecté');
});
