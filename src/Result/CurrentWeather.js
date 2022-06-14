import React from 'react';
// import reactIcon from './react-brands.svg'

import { WiHumidity} from 'weather-icons-react';
import WeatherIcon from './WeatherIcon';
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
            <div className="row align-items-center">
                <div className="col-4 p-3">
                    <WeatherIcon icon={current.weatherIcon}/>
                </div>
                <div className="col temp">
                    {current.temp}℃ | ℃
                </div>
            </div>
            <div className="row fs-5">
                {current.description}
            </div>
            <div className=" fs-5">
            <span ><WiHumidity size={80} color="#00ffaa"/></span> {current.humidity}% <br />Wind: {current.wind} km/h
            </div>

        </div>);
}