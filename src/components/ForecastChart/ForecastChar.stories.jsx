import React from 'react'
import ForecastChar from './ForecastChar'

export default {
    title: "ForecastChar",
    component: ForecastChar
}

const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 16,
        "max": 25,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 24,
    },
    {
        "dayHour": "Sab 12",
        "min": 18,
        "max": 28,
    },
]

export const ForecastCharExample = () => (
    <ForecastChar data={data}></ForecastChar>
)