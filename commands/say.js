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

    const sayMessage = args.join(' ');
    msg.delete().catch((O_o) => {});
    msg.channel.send(sayMessage);
};