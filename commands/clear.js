module.exports = async (args, message, Discord) => {
    const deleteCount = parseInt(args[0], 10);

    if (! deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply(
            'Please provide a number greater than 2 and less than 100 for the number of messages to delete',
        );

    const fetched = await message.channel.fetchMessages({
        limit: deleteCount,
    });

    message.channel
        .bulkDelete(fetched)
        .catch((err) =>
            message.reply(`Couldn't delete messages because of: ${ err }`),
        );
};