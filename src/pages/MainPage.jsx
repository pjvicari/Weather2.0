import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import { getCities } from '../Api/serviceCities'

const MainPage = ({ actions, data }) => {
    const history = useHistory()

    const onClicCityHandled = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={getCities()} onClickCity={onClicCityHandled} actions={actions} data={data}></CityList>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
