import userService from '../services/userService';

const createUsser = async (req, res) => {
    let user = req.body;
    try {
        await userService.createUser(user);
    } catch (e) {
        return res.status(400).json(e.message);
    }
    return res.status(200).json(user);
}

const checkLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
    try {
        let token = await userService.checkUserLogin(email, password);
        return res.status(200).json(token);
    } catch (e) {
        return res.status(400).json(e);
    }
}

const getAllUsers = async (req, res) => {
    try {
        let users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(400).json(e);
    }
}

const getAccount = async (req, res) => {
    return res.status(200).json(req.user); //user đã được gán trong middleware khi decode token có data
}

module.exports = {
    createUsser: createUsser,
    checkLogin: checkLogin,
    getAllUsers: getAllUsers,
    getAccount: getAccount,
}