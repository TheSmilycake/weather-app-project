import React from 'react';
import WeatherIcon from './WeatherIcon';
import UnitConverter from "./UnitConverter";

export default function CurrentWeather({ current }) {
    return (
        <div className="CurrentWeather">
            <div className="currentWeatherIcon">
                    <WeatherIcon icon={current.weatherIcon} size={60}/>
            </div>
            <div className="currentTemp"><UnitConverter temp={current.temp}/></div>
            <div className="currentDetails">
                <div className="currentDesc">{current.description}</div>
                <div className="currentHumidity" >Luftfeuchtigkeit: {current.humidity}%</div>
                <div className="currentWindspeed">Windgeschwindigkeit: {current.wind} km/h</div>
            </div>
        </div>);
}