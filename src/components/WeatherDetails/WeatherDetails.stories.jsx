import React from 'react'
import 'typeface-roboto'
import WeatherDetails from './WeatherDetails'

export default {
    title: "WeatherDetails",
    component: WeatherDetails
}

export const WeatherDetailsExample = () => <WeatherDetails humidity={10} wind={20}></WeatherDetails>