import React from 'react';
import CurrentWeather from './CurrentWeather'
import TimestampToDate from './TimestampToDate'
import Forecast from './Forecast'

export default function Result({weatherData}) {


      



  if(weatherData !== "Miau") {
      return (
          <div className="Result">
            <div className="ResultHeader">
                <h2 className="location">{weatherData.CountryCode}, {weatherData.city}</h2>
                <TimestampToDate timestamp={weatherData.timestamp}/>
            </div>
            <CurrentWeather current={weatherData.current} />
              <Forecast forecast={weatherData.forecast}/>
        </div>
      );} else {
      return <div className="Result"/>;
  }
}