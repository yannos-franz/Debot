module.exports = async (args, message, Discord) => {
    if (
        !message.member.roles.some((r) =>
            ['Administrator'].includes(r.name),
        )
    )
        return message.reply(
            "Sorry, you don't have permissions to use this!",
        );

    let member = message.mentions.members.first();
    if (!member)
        return message.reply(
            'Please mention a valid member of this server',
        );
    if (!member.bannable)
        return message.reply(
            'I cannot ban this user! Do they have a higher role? Do I have ban permissions?',
        );

    let reason = args.slice(1).join(' ');
    if (!reason) reason = 'No reason provided';

    await member
        .ban(reason)
        .catch((err) =>
            message.reply(
                `Sorry ${message.author} I couldn\'t ban because of : ${err}`,
            ),
        );
    message.reply(
        `${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`,
    );
};