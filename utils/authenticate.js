module.exports = async (roles, msg) => {
	if (! require('./checkRoles')(msg.member, roles)) {
		msg.reply('Sorry, you don\'t have permission to use this!');

		return false;
	}
	
	return true;
};
