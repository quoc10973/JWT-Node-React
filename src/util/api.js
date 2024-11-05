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

export {
    createUserAPI
}