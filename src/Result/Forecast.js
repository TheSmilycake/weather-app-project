import React from 'react';
import WeatherIcon from './WeatherIcon';
import TimestampToDate from "./TimestampToDate";

export default function Forecast({forecast}) {
    return (
        <div className="Forecast">
            {forecast.map((forecastday) =>
                <div key={forecastday.index} className="forcastday">
                    <div>
                        <TimestampToDate timestamp={forecastday.timestamp} weekdayOnly={true}/>
                    </div>
                    <div><WeatherIcon icon={forecastday.icon} size={30}/></div>
                    <div>
                        <span className="maxTemp">{forecastday.maxTemp}</span>|<span className="minTemp">{forecastday.minTemp}</span>
                    </div>
                </div>
            )}
        </div>);
}