import db from "../models"

const createUser = async (user) => {
    return new Promise((resolve, reject) => {
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