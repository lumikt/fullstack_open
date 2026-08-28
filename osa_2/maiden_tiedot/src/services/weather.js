import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = import.meta.env.VITE_WEATHER_KEY
console.log(api_key)
const getAll = ( city) => {
    return axios.get(`${baseUrl}${city}&appid=${api_key}&units=metric`)
}

export default {getAll}