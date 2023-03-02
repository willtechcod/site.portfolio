import axios from 'axios';
const PORT = 'https://menssagens.vercel.app'

const api = axios.create({
    baseURL: process.env.REACT_APP_SECRET_API || PORT
})

export default api