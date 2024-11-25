import db from "../models"
const bcrypt = require('bcrypt'); //thư viện mã hóa password
const saltRounds = 10;
const jwt = require('jsonwebtoken'); //thư viện tạo token
require('dotenv').config();

const createUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkExistUser = await db.User.findOne({
                where: { email: user.email }
            });
            if (checkExistUser) {
                reject({
                    message: "Email is already in use"
                });
            }
            else {
                let salt = bcrypt.genSaltSync(saltRounds);
                user.role = "Customer";
                user.password = bcrypt.hashSync(user.password, salt);
                db.User.create(user).then(data => {
                    resolve(data);
                }).catch(err => {
                    reject(err);
                });
            }
        } catch (e) {
            reject(e);
        }

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
                    const playload = { email: user.email, name: user.name };

                    const accessToken = jwt.sign(
                        playload,
                        process.env.JWT_SECRET,
                        { expiresIn: process.env.JWT_EXPIRES }
                    )
                    resolve({
                        accessToken: accessToken,

                        user: {
                            name: user.name,
                            email: user.email,
                        }

                    });
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

const getAllUsers = async () => {
    return new Promise((resolve, reject) => {
        db.User.findAll(
            {
                attributes: { excluide: ['password'] }  //lấy tất cả trừ password
            }
        ).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = {
    createUser: createUser,
    checkUserLogin: checkUserLogin,
    getAllUsers: getAllUsers
}