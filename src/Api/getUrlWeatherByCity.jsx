import {url_base_weather, api_key} from './api_url';
const getUrlWeatherByCity = (city, countryCode) => {
    return `${url_base_weather}?q=${city},${countryCode}&appid=${api_key}`;
}

export default getUrlWeatherByCity;