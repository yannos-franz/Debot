module.exports = async (args, msg, Discord) => {
    if (
        !(await require('./../utils/authenticate')(
            [
                'Owner',
                'Dadmin',
                'Moderator'
            ],
            msg,
        ))
    ) {
        return false;
    }

    let member =
		msg.mentions.members.first() || msg.server.members.get(args[0]);
	if (!member)
        return msg.reply('Please mention a valid member of this server');
    if (
		await require('./../utils/checkRoles')(msg.mentions.members.first(), [
			'Owner',
			'Dadmin',
			'Moderator',
		])
	)
		return msg.reply('I cannot warn Moderators, Dadmins or Owners!');

	let reason = args.slice(1).join(' ');
	if (!reason) reason = 'No reason provided';
	msg.channel.send(
		{
			embed: {
				title: 'Warning!',
				description:
                    `${member}, you have been warned by ${msg.member}. If you break the rules again, you will get punished!`,
				fields: [
					{
						name: 'Reason',
						value: reason,
					},
				],
				timestamp: new Date(),
			},
		},
	);
};