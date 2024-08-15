import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = import.meta.env.VITE_SOME_KEY

const getAll = ( city) => {
    return axios.get(`${baseUrl}${city}&appid=${api_key}&units=metric`)
}

export default {getAll}