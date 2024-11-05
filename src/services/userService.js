import db from "../models"
const bcrypt = require('bcrypt'); //thư viện mã hóa password
const saltRounds = 10;

const createUser = async (user) => {
    return new Promise((resolve, reject) => {
        let salt = bcrypt.genSaltSync(saltRounds);
        user.role = "Customer";
        user.password = bcrypt.hashSync(user.password, salt);
        db.User.create(user).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = {
    createUser: createUser
}