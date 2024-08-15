import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ city }) => {
    const [weather, setweather] = useState(null)
    console.log("Here's Weathers", city)
    useEffect(() => {
        weatherService
            .getAll(city)
            .then(response => {
                setweather(response.data)
            })
    }, [])
    
    if (!weather) {
        return null
    }
    
    const temperature = weather.main.temp    
    const weatherIcon = weather.weather[0].icon
    const wind = weather.wind.speed

    return (
        <>
        <h2>Weather in {city}</h2>
        <p>Temperature: {temperature} celsius </p>
        <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
        <p>Wind: {wind}m/s</p>
        </>
    )
}

export default Weather