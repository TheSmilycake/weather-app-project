import React from 'react';
// import reactIcon from './react-brands.svg'

import { WiHumidity, WiStrongWind,WiSunrise, WiSunset} from 'weather-icons-react';

import WeatherIcon from './WeatherIcon';
import TimestampToDate from "./TimestampToDate";

export default function CurrentWeather({ current }) {

    // if (props.weatherData) {
    //     return (<div className="Result mt-5">
    //         <div>{props.weatherData}</div>
    //     </div>);
    // } else {
    //     return (<div className="Result mt-5">
    //      RESULT
    //     </div>);
    // }
    return (
        <div className="CurrentWeather">
            <div className="CurrentWeatherItem">
                    <WeatherIcon icon={current.weatherIcon} size={100}/>
            </div>
            <div className="CurrentWeatherItem">
                <div className="currentTemp">{Math.round(current.temp)}°C</div>
                <div className="currentDesc">{current.description}</div>
            </div>
            <div className="CurrentWeatherItem row">

                <div className="value Humidity">
                    <div className="HumidityBG" >Humidity</div>
                    <div><WiHumidity size={50} color="#00CCFF"/></div>
                    <div className="HumidityBG">{current.humidity}%</div>
                </div>
                <div className="value Windspeed">
                    <div className="WindspeedBG">Windspeed</div>
                    <div><WiStrongWind size={50} color="#99CC99"/></div>
                    <div >{current.wind} km/h</div>
                </div>
                <div className="value Sunrise">
                    <div className="SunriseBG">Sunrise</div>
                    <div><WiSunrise size={50} color="#FFCC00"/></div>
                    <div className="SunriseBG"><TimestampToDate sun={true} timestamp={current.sunrise}/></div>
                </div>
                <div className="value Sunset">
                    <div className="SunsetBG" >Sunset</div>
                    <div><WiSunset size={50} color="#FF9999"/></div>
                    <div className="SunsetBG"><TimestampToDate sun={true} timestamp={current.sunset}/></div>
                </div>
            </div>
        </div>);
}