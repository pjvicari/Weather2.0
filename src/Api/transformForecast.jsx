import moment from 'moment';
import 'moment/locale/es';
import Convert from 'convert-units'
import { getWeatherState } from './transformWeather'

export const transformForecast = data => {
    const daysAhead = [0, 1, 2, 3, 4, 5]
    const days = daysAhead.map(d => moment().add(d, 'd'))
    const dataAux = days.map(day => {
        const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })
        const temps = tempObjArray.map(item => item.main.temp)
        return ({
            dayHour: day.format('ddd'),
            min: Convert(Math.min(...temps)).from('K').to('C').toFixed(0),
            max: Convert(Math.max(...temps)).from('K').to('C').toFixed(0),
            hasTemps: temps.length > 0 ? true : false
        })
    }).filter(item => item.hasTemps)
    return dataAux
}

export const transformForecastItemList = data => {
    const interval = [4, 8, 12, 16, 20, 24]
    return data.list.filter((item, index) => interval.includes(index)).map(item => ({hour: moment.unix(item.dt).hour(), weekDay: moment.unix(item.dt).format('dddd'), state: getWeatherState(item.weather[0]), temperature: Convert(Math.max(item.main.temp)).from('K').to('C').toFixed(0)}))
}
