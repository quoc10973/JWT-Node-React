import userService from '../services/userService';

const createUsser = async (req, res) => {
    let user = req.body;
    try {
        await userService.createUser(user);
    } catch (e) {
        let mess = "Duplicate email";
        return res.status(400).json(mess);
    }
    return res.status(200).json(user);
}

module.exports = {
    createUsser: createUsser
}