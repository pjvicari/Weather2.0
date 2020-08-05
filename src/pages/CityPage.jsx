import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../Api/serviceCities'

const CityPage = ({ data, actions }) => {
    const { allWeather, allDataChar, allForecastItemList } = data
    const { onSetAllWeather, onSetDataChar, onSetForecastItemList } = actions
    const { city, countryCode } = useCityPage(onSetDataChar, onSetForecastItemList, allDataChar, allForecastItemList)
    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])
    useCityList(cities, allWeather, onSetAllWeather)
    const cityCode = getCityCode(city, countryCode)
    const weather = allWeather[cityCode]
    const dataChar = allDataChar[cityCode]
    const forecastItemList = allForecastItemList[cityCode]
    //debugger
    const state = weather && weather.state
    const temperature = weather && weather.temperature

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justify="center" spacing={1}>
                    <Weather state={state} temperature={temperature} />
                    {humidity && wind && <WeatherDetails humidity={humidity}
                        wind={wind} />}
                </Grid>
                <Grid item>
                    {
                        !dataChar && !forecastItemList && <LinearProgress></LinearProgress>
                    }
                </Grid>
                <Grid item>
                    {dataChar && <ForecastChart data={dataChar} />}
                </Grid>
                <Grid item>
                    {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage