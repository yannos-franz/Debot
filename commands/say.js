module.exports = (args, message, Discord) => {
    const sayMessage = args.join(' ');
    message.delete().catch((O_o) => {});
    message.channel.send(sayMessage);
};