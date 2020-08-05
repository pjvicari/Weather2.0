import React from 'react'
import { render } from "@testing-library/react"
import Forecast from "./Forecast"

const forecastItemList = [
    { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
    { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
    { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
    { hour: 14, state: "rain", temperature: 17, weekDay: "Domingo" },
]

test("Forecast render", async () => {

    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)
    //assert
    const forecastItems = await findAllByTestId("forecast-item-content")

    expect(forecastItems).toHaveLength(6)

})