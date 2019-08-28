module.exports = async (args, msg, Discord) => {
    if (
        !(await require('../utils/authenticate')(
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
};