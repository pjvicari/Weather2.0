import React from 'react'
import 'typeface-roboto'
import CityList from './CityList'
import { action } from "@storybook/addon-actions";

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Guatemala", country:"Guatemala"},
    {city: "Quetzaltenango", country:"Guatemala"},
    {city: "San Marcos", country:"Guatemala"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}></CityList>