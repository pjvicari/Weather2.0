import { useState, useEffect } from 'react'
import axios from 'axios'
import getUrlWeatherByCity from '../Api/getUrlWeatherByCity'
import { transformWeather } from '../Api/transformWeather'
import {getCityCode} from '../utils/utils'

const useCityList = (cities, allWeather, actions) => {
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            try {
                actions({type: 'SET_ALL_WEATHER', payload: {[getCityCode(city, countryCode)]: {}}})
                const response = await axios.get(getUrlWeatherByCity(city, countryCode))
                const { data } = response
                actions({type: 'SET_ALL_WEATHER', payload: {[(getCityCode(city, countryCode))]: transformWeather(data)}})
            } catch (error) {
                if (error.response) { //Errores que nos responde el server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { //Errores por no llegar al server
                    setError("Verifique la conexión a internet")
                } else { //Errores imprevistos
                    setError("Error imprevisto")
                }
            }

        }
        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city, countryCode)]){
                setWeather(city, countryCode)
            }
        })
    }, [cities, allWeather, actions])

    return {error, setError}
}

export default useCityList