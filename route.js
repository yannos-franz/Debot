module.exports = (message, commands, Discord) => {
    if (message.content.indexOf('!') !== 0) return;

	if (message.author.bot) return;

	const args = message.content
		.slice(1)
		.trim()
        .split(/ +/g);
    
    const command = args.shift().toLowerCase();
    
    if (commands.includes(command)) return require(`./commands/${ command }`)(args, message, Discord);

    return;
};