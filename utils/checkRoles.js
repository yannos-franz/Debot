module.exports = async (member, roles) => {
	console.log(member.roles.some((role) => roles.includes(role.name)));
	return member.roles.some((role) => roles.includes(role.name));
};