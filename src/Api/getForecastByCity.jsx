import {url_base_forecast, api_key} from './api_url';
const getUrlForecastByCity = (city, countryCode) => {
    return `${url_base_forecast}?q=${city},${countryCode}&appid=${api_key}`;
}

export default getUrlForecastByCity;