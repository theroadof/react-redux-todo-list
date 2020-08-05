import Axios from "axios";

const axios = Axios.create();
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = JSON.stringify(config.data)
    }
    return config;
});

axios.interceptors.response.use(
    (response) => {
        let data = response.data;
        response.data = data.data;
        return response;
    },
    (error) => {
        alert(error);
        return Promise.reject(error);
    });

export default axios;