const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTEzNzkzMzEzNDk3OTM5OTY4.DtNMTg._ze4vvXuTlUs4YjNWGVEZ98so9k);//where NTEzNzkzMzEzNDk3OTM5OTY4.DtNMTg._ze4vvXuTlUs4YjNWGVEZ98so9k is the token of our bot
