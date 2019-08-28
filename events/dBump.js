module.exports = (msg) => {
	if (msg.content.includes('Bump done') && msg.author.bot) {
			return msg.channel.send(
				`Thanks for the bump, ${msg.mentions.members.first()}!`,
			);
		}
}