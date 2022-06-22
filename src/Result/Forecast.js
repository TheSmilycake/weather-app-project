import React from 'react';
import WeatherIcon from './WeatherIcon';
import TimestampToDate from "./TimestampToDate";
import ConditionString from "./ConditionString";

export default function Forecast({forecast}) {
    console.log(forecast);
    return (
        <div className="Forecast">
            {forecast.slice(1).map((forecastday, index) =>
                <div key={index} className="forcastday">
                    <div>
                        <TimestampToDate timestamp={forecastday.date} weekdayOnly={true}/>
                    </div>
                    <div><WeatherIcon icon="01d" size={30}/></div>
                    <div>
                        <span className="maxTemp">{forecastday.maxTemp}°C</span> |<span className="minTemp">{forecastday.minTemp}°C</span>
                    </div>
                    <div><ConditionString conditions={forecastday.conditions}/></div>
                </div>
            )}
        </div>);
}