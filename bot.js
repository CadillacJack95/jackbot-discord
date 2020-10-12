require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


// client.on('message', message => {
//     const channel = message.guild.channels.cache.get("765218727964311582");

//     const exampleEmbed = new Discord.MessageEmbed()
//         .setColor('#003366')
//         .setTitle('Welcome to the Jackers Club')
//         .setDescription('Some description here')
//         .setThumbnail('https://i.imgur.com/wSTFkRM.png')
//         .addFields(
//             { name: 'Regular field title', value: 'Some value here' },
//             { name: '\u200B', value: '\u200B' },
//             { name: 'Inline field title', value: 'Some value here', inline: true },
//             { name: 'Inline field title', value: 'Some value here', inline: true },
//         )
//         .addField('Inline field title', 'Some value here', true)
//         .setImage('https://i.imgur.com/wSTFkRM.png')
//         .setTimestamp()
//         .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
//     channel.send(exampleEmbed);
//     console.log(message);
// })

client.on('message', message => {
    // console.log(message.guild);

    const args = message.content.slice('!').trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const channel = message.guild.channels.cache.get("765218727964311582");
    console.log(command);

    if(command === '!welcome') {


        console.log("entered");
        //check if embed has been sent by id 
        // if not send it again
        // if it has, dont send it again

        const welcomeAndRulesEmbed = new Discord.MessageEmbed()
            .setColor("#003366")
            .setTitle("Welcome to the Jackers Club")
            .setDescription("Welcome to the Jackers Club, please read the below rules and then click the [insert emote here] to be assigned a role to access the rest of the server")
            .addField('Do\'s', 'Be nice', true)
            .addField('Don\'ts', 'Be rude', true)


            message.channel.send({embed: welcomeAndRulesEmbed}).then(embedMessage => {
                embedMessage.react("👍");
            });



            // channel.send(welcomeAndRulesEmbed);
            // welcomeAndRulesEmbed.react('👍');

    }

    client.on("messageReactionAdd", function(messageReaction, user) {

        console.log(message.id);
        console.log(messageReaction.message.id);

        if(messageReaction.message.id === "765272402703679568") {

            console.log("Reaction recieved");


        }

    })

})




client.login(process.env.BOT_TOKEN);