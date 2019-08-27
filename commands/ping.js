module.exports = (args, message, Discord) => {
    const res = await message.channel.send('Ping?');
    
    res.edit(
        `Pong! Latency is ${m.createdTimestamp -
            message.createdTimestamp}ms. API Latency is ${Math.round(
            Discord.ping,
        )}ms`,
    );
};