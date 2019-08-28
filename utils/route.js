module.exports = (msg, commands, Discord) => {
    if (require('./../events/dBump')(msg)) return;

    if (msg.content.indexOf('?') !== 0) return;

	if (msg.author.bot) return;

	const args = msg.content
		.slice(1)
		.trim()
        .split(/ +/g);
    
    const command = args.shift().toLowerCase();
    
    if (commands.includes(command)) return require(`./../commands/${ command }`)(args, msg, Discord);

    return;
};