module.exports = async (member, roles) => {
	return member.roles.some((role) => roles.includes(role.name));
};