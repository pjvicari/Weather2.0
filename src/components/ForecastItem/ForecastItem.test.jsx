import React from 'react'
import { render } from "@testing-library/react"
import ForecastItem from "./ForecastItem"

test("ForecastItem render", async () => {

    const {findByText} = render(<ForecastItem hour={10} state="sunny" temperature={23} weekDay="Lunes"></ForecastItem>)
    //assert
    const temp = await findByText(/23/)
    //const state = await findByText(/sunny/)
    const hour = await findByText(/10/)
    const weekDay = await findByText(/Lunes/)

    expect(temp).toHaveTextContent("23")
    //expect(state).toHaveTextContent("23")
    expect(hour).toHaveTextContent("10")
    expect(weekDay).toHaveTextContent("Lunes")
})