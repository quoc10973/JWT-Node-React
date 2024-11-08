import axios from 'axios';
const instance = axios.create({
    //Set the base url to the backend url
    baseURL: import.meta.env.VITE_BACKEND_URL
});

// Alter defaults after instance has been created


export default instance;
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`; // set token header default for all request 
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) {
        return response.data
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("check error", error)
    return Promise.reject(error);
});