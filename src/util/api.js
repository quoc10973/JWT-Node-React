import axios from "./axios.customize"

const createUserAPI = (email, password, name, phoneNumber) => {
    const URL_API = "/api/register"
    let data = {
        email: email,
        password: password,
        name: name,
        phoneNumber: phoneNumber
    }
    return axios.post(URL_API, data)
}
const loginAPI = (email, password) => {
    const URL_API = "/api/login"
    let data = {
        email: email,
        password: password,
    }
    return axios.post(URL_API, data)
}

const getUsersAPI = () => {
    const URL_API = "/api/users"
    return axios.get(URL_API)
}

const getAccountAPI = () => {
    const URL_API = "/api/account"
    return axios.get(URL_API)
}

export {
    createUserAPI,
    loginAPI,
    getUsersAPI,
    getAccountAPI,
}