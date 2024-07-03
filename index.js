const { Client } = require('discord.js-selfbot-v13');

const platforms = {
    web: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        properties: { $browser: 'Discord Web' }
    },
    phone: {
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        properties: { $browser: 'Discord iOS' }
    },
    pc: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        properties: { $os: 'Windows', $browser: 'Discord PC' }
    }
};

const clients = [];

Object.entries(platforms).forEach(([platform, { userAgent, properties }]) => {
    const client = new Client({
        ws: { properties },
        http: { userAgent }
    });

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag} on ${platform}`);
    });

    clients.push(client);
});


clients.forEach(client => {
    client.login('token');
});
