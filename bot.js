
require('dotenv').config();

const Discord = require('discord.js');
const logger  = require('winston');

const client = new Discord.Client();

logger.remove(logger.transports.Console);
logger.add( new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

client.once('ready', () => {
    logger.info('Ready');
});

client.login(process.env.BOT_TOKEN);

const prefix = process.env.PREFIX;

var Queues = {};

client.on('message', message => {

    if (message.content.substring(0, 1) == `${prefix}`) {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                message.channel.send('pong...');
            break;

            case 'debug':
                message.channel.send(`Server name: ${message.guild.name}\nMembers: ${message.guild.memberCount}`);
            break;

            case 'user-info':
                message.channel.send(`Your username: @${message.author.username}\nYour ID: ${message.author.id}`);
            break;

            case 'test':
                message.channel.send(message);
            break;

            case 'createqueue':


            break;

            case 'q':
                
            break;
            
         }
     }

});

/*

var Discord = require('discord.io');
var logger  = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

var Queues = {};

// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        logger.info('user sending message: ' + userID + ', channel: ' + channelID);
        logger.info(user);

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            case 'createqueue':


            break;

            case 'q':
                
            break;
            
         }
     }
});
*/