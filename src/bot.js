/**
 * F-Bumper
 * @author Boylair
 */

const { Client } = require('discord.js-selfbot-v13');

const client = new Client()

const path = require('path');

require('dotenv').config({path: path.join(__dirname, '..', './config/config.env')});



client.on('ready', async () => {


    console.clear();
    console.log((`
        Disboard Auto Bumper
    ███████╗    ██████╗ ██╗   ██╗███╗   ███╗██████╗ ███████╗██████╗ 
    ██╔════╝    ██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██╔══██╗
    █████╗█████╗██████╔╝██║   ██║██╔████╔██║██████╔╝█████╗  ██████╔╝
    ██╔══╝╚════╝██╔══██╗██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══╝  ██╔══██╗
    ██║         ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║     ███████╗██║  ██║
    ╚═╝         ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝
                                                    By: Boylair                                                                                                       
                                                                                                          
                     
                            Beta
                    Bumper: ${client.user.tag}
                    Channel: ${process.env.bump_channel}
                            Made with ❤️
    `))




    console.log(`Logged in: ${client.user.tag}!`)

    const channel = await client.channels.fetch(process.env.bump_channel)

    await channel.sendSlash('302050872383242240', 'bump')
    console.count('Bumped!')

    setInterval(async function() {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
        }, 7260000)

})

client.login(process.env.token)
