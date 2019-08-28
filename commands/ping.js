module.exports = async (args, message, Discord) => {
	if (
		!(await require('./../utils/permission')(
			[
				'Owner',
				'Dadmin',
				'Moderator'
			],
			message,
		))
	) {
		return false;
	}

    const res = await message.channel.send('Ping?');
    
    res.edit(
		`Pong! Latency is ${res.createdTimestamp -
			message.createdTimestamp}ms. API Latency is ${Math.round(
			Discord.ping,
		)}ms`,
	);
};