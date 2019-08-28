let Discord = require('discord.js');
Discord = new Discord.Client();

Discord.on('ready', () => {
	console.log(`Bot has started!`);
	// Discord.user.setActivity(`on ${Discord.servers.size} servers`);
	Discord.user.setActivity(`over 1 server`, { type: 'watching' });
});

Discord.on('serverCreate', (server) => {
	// Discord.user.setActivity(`on ${Discord.servers.size} servers`);
});

Discord.on('serverDelete', (server) => {
	// Discord.user.setActivity(`on ${Discord.servers.size} servers`);
});

Discord.on('message', async (msg) => {
    require('./utils/route')(
		msg,
		[
			// 'ban',
			'clear',
			// 'kick',
			'ping',
			'punish',
			'say',
			'warn',
		],
		Discord,
	);
});

Discord.login(process.env.TOKEN);

require('./utils/server');