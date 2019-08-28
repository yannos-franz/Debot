module.exports = async (args, message, Discord) => {
    if (
        !(await require('./../utils/authenticate')(
            [
                'Owner',
                'Dadmin',
                'Moderator'
            ],
            message,
        ))
    ) {
        return false;
    }


};