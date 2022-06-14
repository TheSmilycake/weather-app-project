import React from 'react';
// import reactIcon from './react-brands.svg'
import sunIcon from './sun-solid.svg'

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
                    <img src={sunIcon} className="img-fluid" alt="reacticon" />
                </div>
                <div className="col temp">
                    {current.temp}℃ | ℃
                </div>
            </div>
            <div className="row fs-5">
                thunderstorm with heavy drizzle
            </div>
            <div className="row fs-5">
                Luftfeuchte: {current.humidity}% <br />Wind: {current.wind} km/h
            </div>

        </div>);
}