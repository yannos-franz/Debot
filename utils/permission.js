module.exports = async (roles, message) => {
	if (!message.member.roles.some((role) => roles.includes(role.name))) {
		message.reply('Sorry, you don\'t have permission to use this!');

		return false;
	}
	
	return true;
};
