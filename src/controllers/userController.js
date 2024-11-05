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

module.exports = {
    createUsser: createUsser,
    checkLogin: checkLogin
}