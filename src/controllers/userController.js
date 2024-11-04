import userService from '../services/userService';

const createUsser = async (req, res) => {
    let user = req.body;
    await userService.createUser(user);

    return res.status(200).json(user);
}

module.exports = {
    createUsser: createUsser
}