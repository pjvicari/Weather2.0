import { useState, useEffect } from 'react'
import axios from 'axios'
import getUrlWeatherByCity from '../Api/getUrlWeatherByCity'
import { transformWeather } from '../Api/transformWeather'
import {getCityCode} from '../utils/utils'

const useCityList = (cities, allWeather, onSetAllWeather) => {
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            try {
                onSetAllWeather({[getCityCode(city, countryCode)]: {}})
                const response = await axios.get(getUrlWeatherByCity(city, countryCode))
                const { data } = response
                const allWeatherAux = {[(getCityCode(city, countryCode))]: transformWeather(data)}
                //setAllWeather(allWeather => ({ ...allWeather, [(getCityCode(city, countryCode))]: transformWeather(data) }))
                onSetAllWeather(allWeatherAux)
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
    }, [cities, allWeather, onSetAllWeather])

    return {error, setError}
}

export default useCityList