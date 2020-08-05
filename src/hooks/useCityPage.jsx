import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import getForecastByCity from '../Api/getForecastByCity'
import { transformForecast, transformForecastItemList } from '../Api/transformForecast'
import { getCityCode } from '../utils/utils'

const useCityPage = (onSetDataChar, onSetForecastItemList, allDataChar, allForecastItemList) => {
    const { city, countryCode } = useParams()

    useEffect(() => {
        const cityCode = getCityCode(city, countryCode)
        const getForecast = async () => {
            try {
                const { data } = await axios.get(getForecastByCity(city, countryCode))
                onSetDataChar({ [cityCode]: transformForecast(data) })
                onSetForecastItemList({ [cityCode]: transformForecastItemList(data) })
            } catch (error) {
                console.log(error)
            }
        }
        if(allDataChar && allForecastItemList && !allDataChar[cityCode] && !allForecastItemList[cityCode])
        getForecast()

    }, [city, countryCode, onSetDataChar, onSetForecastItemList, allDataChar, allForecastItemList])
    return { city, countryCode }
}
export default useCityPage