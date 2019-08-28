module.exports = (message) => {
    if (message.content.includes('Bump done')) {
        return message.channel.send(`Thanks for the bump, ${ message.mentions.members.first() }!`);
    }
}