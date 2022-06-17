import React from 'react';
import './Result.css'
import CurrentWeather from './CurrentWeather'
import TimestampToDate from './TimestampToDate'

export default function Result({weatherData}) {


      



  if(weatherData != "Miau") {
      return (
          <div className="Result">
            <div className="">
                <h2 className="location mb-0">{weatherData.CountryCode}, {weatherData.city}</h2>
                <TimestampToDate timestamp={weatherData.timestamp}/>
            </div>
            <CurrentWeather current={weatherData.current} />
        </div>
      );} else {
      return <div className="Result"/>;
  }
}