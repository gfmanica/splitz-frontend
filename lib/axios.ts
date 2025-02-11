import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'https://splitz-backend.onrender.com/api/v1',
    timeout: 60000,

    headers: {
        'content-type': 'application/json'
    }
});
