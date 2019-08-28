module.exports = async (args, message, Discord) => {
    const res = await message.channel.send('Ping?');
    
    res.edit(
		`Pong! Latency is ${res.createdTimestamp -
			message.createdTimestamp}ms. API Latency is ${Math.round(
			Discord.ping,
		)}ms`,
	);
};