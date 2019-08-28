module.exports = (msg) => {
	if (msg.embeds) {
		msg.embeds.forEach((embed) => {
			if (embed.description.includes('Bump done') &&
				mgb.member.bot
			) {
				return msg.channel.send(
					`Thanks for the bump, ${msg.mentions.members.first()}!`,
				);
			}

			if (
				embed.description.includes('until the server can be bumped') &&
				mgb.member.bot
			) {
				return msg.channel.send(
					`Nice try, ${msg.mentions.members.first()}!`,
				);
			}
		});
	};
}