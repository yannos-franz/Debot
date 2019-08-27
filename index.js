const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Bot has started!`);
	client.user.setActivity(`with your mom`);
});

client.on('serverCreate', (server) => {
	// client.user.setActivity(`Serving ${client.servers.size} servers`);
});

client.on('serverDelete', (server) => {
	// client.user.setActivity(`Serving ${client.servers.size} servers`);
});

client.on('message', async (message) => {
	if (message.author.bot) return;

	if (message.content.indexOf('!') !== 0) return;

	const args = message.content
		.slice(1)
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		const m = await message.channel.send('Ping?');
		m.edit(
			`Pong! Latency is ${m.createdTimestamp -
				message.createdTimestamp}ms. API Latency is ${Math.round(
				client.ping,
			)}ms`,
		);
	}

	// if (command === 'say') {
	// 	const sayMessage = args.join(' ');
	// 	message.delete().catch((O_o) => {});
	// 	message.channel.send(sayMessage);
	// }

	// if (command === 'kick') {
	// 	if (
	// 		!message.member.roles.some((r) =>
	// 			['Administrator', 'Moderator'].includes(r.name),
	// 		)
	// 	)
	// 		return message.reply(
	// 			"Sorry, you don't have permissions to use this!",
	// 		);

	// 	let member =
	// 		message.mentions.members.first() ||
	// 		message.server.members.get(args[0]);
	// 	if (!member)
	// 		return message.reply(
	// 			'Please mention a valid member of this server',
	// 		);
	// 	if (!member.kickable)
	// 		return message.reply(
	// 			'I cannot kick this user! Do they have a higher role? Do I have kick permissions?',
	// 		);

	// 	let reason = args.slice(1).join(' ');
	// 	if (!reason) reason = 'No reason provided';

	// 	await member
	// 		.kick(reason)
	// 		.catch((error) =>
	// 			message.reply(
	// 				`Sorry ${message.author} I couldn't kick because of : ${error}`,
	// 			),
	// 		);
	// 	message.reply(
	// 		`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`,
	// 	);
	// }

	// if (command === 'ban') {
	// 	if (
	// 		!message.member.roles.some((r) =>
	// 			['Administrator'].includes(r.name),
	// 		)
	// 	)
	// 		return message.reply(
	// 			"Sorry, you don't have permissions to use this!",
	// 		);

	// 	let member = message.mentions.members.first();
	// 	if (!member)
	// 		return message.reply(
	// 			'Please mention a valid member of this server',
	// 		);
	// 	if (!member.bannable)
	// 		return message.reply(
	// 			'I cannot ban this user! Do they have a higher role? Do I have ban permissions?',
	// 		);

	// 	let reason = args.slice(1).join(' ');
	// 	if (!reason) reason = 'No reason provided';

	// 	await member
	// 		.ban(reason)
	// 		.catch((error) =>
	// 			message.reply(
	// 				`Sorry ${message.author} I couldn\'t ban because of : ${error}`,
	// 			),
	// 		);
	// 	message.reply(
	// 		`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`,
	// 	);
	// }

	if (command === 'clear') {
		const deleteCount = parseInt(args[0], 10);

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply(
				'Please provide a number between 2 and 100 for the number of messages to delete',
			);

		const fetched = await message.channel.fetchMessages({
			limit: deleteCount,
		});
		message.channel
			.bulkDelete(fetched)
			.catch((error) =>
				message.reply(`Couldn't delete messages because of: ${error}`),
			);
	}
});

client.login(process.env.TOKEN);

const app = require('express')();
app.listen(process.env.PORT || 5000, () => console.log(`Listening on ${process.env.PORT || 5000}`))
app.get('/', (req, res) => res.send('Debot is online!'));