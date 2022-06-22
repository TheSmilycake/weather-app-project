import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function CurrentWeather({ currentWeather }) {
    return (
        <div className="CurrentWeather">
            <div className="currentWeatherIcon">
                    <WeatherIcon icon="01d" size={60}/>
            </div>
            <div className="currentTemp">{Math.round(currentWeather.temp)}°C</div>
            <div className="currentDetails">
                {/*<div className="currentDesc">{currentTemp.description}</div>*/}
                <div className="currentHumidity" >Luftfeuchtigkeit: {Math.round(currentWeather.humidity)}%</div>
                <div className="currentWindspeed">Windgeschwindigkeit: {Math.round(currentWeather.windspeed)} km/h</div>
            </div>
        </div>);
}