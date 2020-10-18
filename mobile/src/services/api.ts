import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.1:3333' //Pode dar erro pq IP n é esse, olhar IP no lan do expo
})

export default api;