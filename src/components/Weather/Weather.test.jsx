import React from 'react'
import { render } from "@testing-library/react"
import Weather from "./Weather"
import '@testing-library/jest-dom/extend-expect'

test("CityInfo render", async () => {

    const {findByRole} = render(<Weather temperature={10} state="sunny"></Weather>)
    //assert
    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})