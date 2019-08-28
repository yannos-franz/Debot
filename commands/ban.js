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

    let member = msg.mentions.members.first();
    if (!member)
        return msg.reply(
            'Please mention a valid member of this server',
        );
    if (!member.bannable)
        return msg.reply(
            'I cannot ban this user! Do they have a higher role? Do I have ban permissions?',
        );

    let reason = args.slice(1).join(' ');
    if (!reason) reason = 'No reason provided';

    await member
        .ban(reason)
        .catch((err) =>
            msg.reply(
                `Sorry ${msg.author} I couldn\'t ban because of : ${err}`,
            ),
        );
    msg.reply(
        `${member.user.tag} has been banned by ${msg.author.tag} because: ${reason}`,
    );
};