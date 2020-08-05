import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain, WiSnow, WiWindy, WiDayThunderstorm, WiDaySprinkle } from "react-icons/wi"
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG, THUNDER, DRIZZLE } from '../../constants/weathers'

export const validValues = [
    CLOUD,
    CLOUDY,
    FOG,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE
]

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    windy: WiWindy,
    thunder: WiDayThunderstorm,
    drizzle: WiDaySprinkle
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <>
            <StateByName></StateByName>
        </>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
