module.exports = async (roles, message) => {
	if (! require('./checkRoles')(message.member, roles)) {
		message.reply('Sorry, you don\'t have permission to use this!');

		return false;
	}
	
	return true;
};
