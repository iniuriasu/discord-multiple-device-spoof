const { Client } = require('discord.js-selfbot-v13');
const platforms = {
    web: {
        properties: { $browser: 'Discord Web' }
    },
    phone: {
        properties: { $browser: 'Discord iOS' }
    },
    console: {
        properties: { $os: 'Windows', $browser: 'Discord Embedded' }
    }
};

const clients = [];

Object.entries(platforms).forEach(([ { properties }]) => {
    const client = new Client({
        ws: { properties }
    });
    clients.push(client);
});

clients.forEach(client => {
    client.login('TOKEN').catch(console.error);
});

/*

Release 1.1

Deleted useless lines,
thanks to my friend added "console" spoof.


*/
