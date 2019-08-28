module.exports = (msg) => {
	if (msg.content.includes('Bump done') && msg.author.bot) {
		return msg.channel.send(
			`Thanks for the bump, ${msg.mentions.members.first()}!`,
		);
	}
	
	if (
		msg.content.includes('until the server can be bumped') &&
		msg.author.bot
	) {
		return msg.channel.send(
			`Nice try, ${msg.mentions.members.first()}!`,
		);
	}
}