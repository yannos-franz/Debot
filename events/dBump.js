module.exports = (msg) => {
	if (msg.embeds[0].description.includes('Bump done')) {
		return msg.channel.send(
			`Thanks for the bump, ${msg.mentions.members.first()}!`,
		);
	}

	if (
		msg.embeds[0].description.includes('until the server can be bumped')
	) {
		return msg.channel.send(`Nice try, ${msg.mentions.members.first()}!`);
	}
}