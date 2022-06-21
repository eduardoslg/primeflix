
import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3
// URL da API: /movie/now_playing?api_key=8ee9ecf01c128d1c2153fb207a20e759&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;