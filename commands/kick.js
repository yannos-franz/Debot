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
        msg.mentions.members.first() ||
        msg.server.members.get(args[0]);
    if (!member)
        return msg.reply(
            'Please mention a valid member of this server',
        );
    if (!member.kickable)
        return msg.reply(
            'I cannot kick this user! Do they have a higher role? Do I have kick permissions?',
        );

    let reason = args.slice(1).join(' ');
    if (!reason) reason = 'No reason provided';

    await member
        .kick(reason)
        .catch((err) =>
            msg.reply(
                `Sorry ${msg.author} I couldn't kick because of : ${err}`,
            ),
        );
    msg.reply(
        `${member.user.tag} has been kicked by ${msg.author.tag} because: ${reason}`,
    );
};