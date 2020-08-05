import Convert from 'convert-units';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, FOG, THUNDER, DRIZZLE } from './../constants/weathers'


export const getWeatherState = weather => {
    const {id} = weather;
        if (id < 300){
            return THUNDER;
        }else if(id < 400){
            return DRIZZLE;
        }else if(id < 600){
            return RAIN;
        }else if(id < 700){
            return SNOW;
        }else if(id < 800){
            return FOG;
        }else if(id === 800){
            return SUN;
        }else if(id === 801){
            return CLOUDY;
        }else if(id >= 802)
        return CLOUD;
    
}

export const transformWeather = weather_data => {
    const {temp} = weather_data.main;
    const state = getWeatherState(weather_data.weather[0]);
    const humidity = weather_data.main.humidity
    const wind = weather_data.wind.speed
    const data = {
        temperature: Convert(temp).from("K").to("C").toFixed(0),
        state,
        humidity,
        wind
    }
    return data;
}

//export default transformWeather;