module.exports = async (args, msg, Discord) => {
	if (
		!(await require('./../utils/authenticate')(
			[
				'Owner',
				'Dadmin',
				'Moderator'
			],
			msg,
		))
	) {
		return false;
	}

    const res = await msg.channel.send('Ping?');
    
    res.edit(
		`Pong! Latency is ${res.createdTimestamp -
			msg.createdTimestamp}ms. API Latency is ${Math.round(
			Discord.ping,
		)}ms.`,
	);
};