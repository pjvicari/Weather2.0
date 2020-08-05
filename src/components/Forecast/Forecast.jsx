import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from '../ForecastItem'
import { validValues } from '../IconState'

const renderForecasItem = forecast => {
    const { hour, weekDay, state, temperature } = forecast
    return (
        <Grid data-testid="forecast-item-content" item key={`${weekDay}${hour}`}>
            <ForecastItem hour={hour} weekDay={weekDay} state={state} temperature={temperature}></ForecastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="space-around"
            alignItems="center">
            {
                forecastItemList &&
                forecastItemList.map(forecast => renderForecasItem(forecast))
            }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(
        PropTypes.shape({
            weekDay: PropTypes.string.isRequired,
            hour: PropTypes.number.isRequired,
            state: PropTypes.oneOf(validValues).isRequired,
            temperature: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Forecast
