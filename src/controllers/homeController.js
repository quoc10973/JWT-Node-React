import { Json } from 'sequelize/lib/utils';
import db from '../models/index';
let getHomePage = async (req, res) => {
    let data = await db.User.findAll({
        raw: true,
    });
    console.log(data);
    return res.send(JSON.stringify(data));
}

module.exports = {
    getHomePage: getHomePage
}