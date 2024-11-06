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
export {
    createUserAPI,
    loginAPI,
}