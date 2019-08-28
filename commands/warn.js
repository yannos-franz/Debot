module.exports = async (args, message, Discord) => {
    if (
        !(await require('./../utils/permission')(
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