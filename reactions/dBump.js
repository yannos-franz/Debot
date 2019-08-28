module.exports = (message) => {
	if (message.content.includes('Bump done') && message.author.bot) {
			return message.channel.send(
				`Thanks for the bump, ${message.mentions.members.first()}!`,
			);
		}
}