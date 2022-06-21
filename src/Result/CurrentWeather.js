import React from 'react';
import WeatherIcon from './WeatherIcon';
import UnitConverter from "./UnitConverter";

export default function CurrentWeather({ currentWeather }) {
    return (
        <div className="CurrentWeather">
            <div className="currentWeatherIcon">
                    <WeatherIcon icon="01d" size={60}/>
            </div>
            <div className="currentTemp"><UnitConverter temp={currentWeather.temp}/></div>
            <div className="currentDetails">
                {/*<div className="currentDesc">{currentTemp.description}</div>*/}
                <div className="currentHumidity" >Luftfeuchtigkeit: {currentWeather.humidity}%</div>
                <div className="currentWindspeed">Windgeschwindigkeit: {currentWeather.windspeed} km/h</div>
            </div>
        </div>);
}