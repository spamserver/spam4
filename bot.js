const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514825948454060033")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "4say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});  
client.login('NTE0ODY5NTAwODY5MzQ1MzMx.Dtc1rQ.90kqCGPWf2osgVXy3TtAE_XhkeI');
