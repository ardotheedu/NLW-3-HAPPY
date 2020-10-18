import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.7:3333' //Pode dar erro pq IP n é esse, olhar IP no lan do expo
})// tambem troquei no images_view do backend para funcionar e peagr as images

export default api;