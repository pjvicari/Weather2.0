import React from 'react'
import 'typeface-roboto'
import ForeCast from './Forecast'

export default {
    title: "ForeCast",
    component: ForeCast
}

const forecastItemList = [
    { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
    { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
    { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Domingo" },
]

export const ForeCastExample = () => <ForeCast forecastItemList={forecastItemList}></ForeCast>