import React from 'react';
import TimestampToDate from './TimestampToDate'
import Forecast from './Forecast'
import WeatherIcon from "./WeatherIcon";
import ConditionString from "./ConditionString";

export default function Result({weatherData}) {

    if (weatherData !== "NoSearch") {
        return (
            <div className="Result">
                <div className="ResultHeader">
                    <h2 className="location">{weatherData.address}</h2>
                    <TimestampToDate timestamp={weatherData.currentDate}/> · <span
                    className="currentDesc"><ConditionString conditions={weatherData.forecast[0].conditions}/></span>
                </div>
                <div className="CurrentWeather">
                    <div className="currentTemp">
                        <WeatherIcon icon="01d" size={54}/> {weatherData.currentTemp}°C
                    </div>
                    <div className="currentDetails">
                        <div className="today-forecast-temp"><span
                            className="maxTemp">{weatherData.forecast[0].maxTemp}°C</span> |<span
                            className="minTemp">{weatherData.forecast[0].minTemp}°C</span></div>
                        <div className="currentHumidity">Luftfeuchtigkeit: {weatherData.currentHumidity}%</div>
                        <div className="currentWindspeed">Windgeschwindigkeit: {weatherData.currentWindspeed} km/h</div>
                    </div>
                </div>
                <Forecast forecast={weatherData.forecast}/>
            </div>
        );
    } else {
        return <div className="Result"/>;
    }
}