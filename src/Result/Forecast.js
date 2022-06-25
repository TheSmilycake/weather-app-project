import React from 'react';
import WeatherIcon from './WeatherIcon';
import TimestampToDate from "./TimestampToDate";
import ConditionString from "./ConditionString";

export default function Forecast({forecast}) {
    return (
        <div className="Forecast">
            {forecast.slice(1).map((forecastDay, index) =>
                <div key={index} className="forecastDay">
                    <div className="forecastDay-icon"><WeatherIcon conditions={forecastDay.conditions} size={45}/>
                    </div>
                    <div className="forecastDay-datails">
                        <div>
                            <TimestampToDate timestamp={forecastDay.date} weekdayOnly={true}/>
                        </div>
                        <div className="forecastDay-values">
                            <span className="forecastDay-temp">
                                <span className="maxTemp">{forecastDay.maxTemp}°C</span> |<span
                                className="minTemp">{forecastDay.minTemp}°C</span>
                            </span>
                            <span className="forecastDay-desc">
                                <ConditionString conditions={forecastDay.conditions}/>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>);
}