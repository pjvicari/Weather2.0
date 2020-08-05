import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import CityList from "./CityList"

const cities = [
    {city: "Guatemala", country:"Guatemala"},
    {city: "Quetzaltenango", country:"Guatemala"},
    {city: "San Marcos", country:"Guatemala"}
]

test("CityList render", async () => {
    const fnClickOnItem = jest.fn()
    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}></CityList>)
    //assert
    const items = await findAllByRole("button")

    expect(items).toHaveLength(3)

})

test("CityList click on item", async () =>{
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}></CityList>)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})