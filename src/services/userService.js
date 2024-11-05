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

const checkUserLogin = async (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            });
            if (user) {
                let checkPass = bcrypt.compareSync(password, user.password);
                if (checkPass) {
                    //access token generate for user
                    let token = "access_token";
                    resolve(token);
                } else {
                    reject({
                        EC: "1",
                        EM: "Email/Pasword is not correct" //EC: error code, EM: error message
                    });
                }
            }
            else {
                reject({
                    EC: "2",
                    EM: "Email/Pasword is not correct"
                });
            }
        } catch (e) {
            reject(e);
        }

    });
}

module.exports = {
    createUser: createUser,
    checkUserLogin: checkUserLogin
}