import React from 'react'
import { render } from "@testing-library/react"
import CityInfo from "./CityInfo"

test("CityInfo render", async () => {
    const city = "Guatemala"
    const country = "Guatemala"
    const {findAllByRole} = render(<CityInfo city={city} country={country}></CityInfo>)
    //assert
    const cityAncContryComponents = await findAllByRole("heading")

    expect(cityAncContryComponents[0]).toHaveTextContent(city)
    expect(cityAncContryComponents[1]).toHaveTextContent(country)
})