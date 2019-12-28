
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

    if ( ! message.content.startsWith(prefix) || message.author.bot ) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd  = args.shift().toLowerCase();

    switch(cmd) {
        // !ping
        case 'ping':
            message.channel.send('pong...');
        break;

        case 'debug':
            message.channel.send(`Server name: ${message.guild.name}\nMembers: ${message.guild.memberCount}`);
        break;

        case 'args-info':
            if ( ! args.length ) {
                return message.reply(` you didn't provide any arguments.`);
            }

            message.channel.send(`Command name: ${cmd}\nArguments: ${args}`);
        break;

        case 'avatar':
            if ( ! message.mentions.users.size ) {
                return message.reply(` your avatar is <${message.author.displayAvatarURL}>`);
            }

            const avatars = message.mentions.users.map(user => {
                return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
            });
        break;

        case 'user-info':
            message.reply(` Your username: @${message.author.username}\nYour ID: ${message.author.id}`);
        break;

        case 'test':
            message.channel.send(message);
        break;

        case 'activity':
            client.user.setActivity(args.join(' '));
        break;

        case 'createqueue':


        break;

        case 'q':
            
        break;
        
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