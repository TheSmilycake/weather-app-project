import React from 'react';
import CurrentWeather from './CurrentWeather'
import TimestampToDate from './TimestampToDate'
import Forecast from './Forecast'

export default function Result({weatherData}) {


      



  if(weatherData !== "Miau") {
      return (
          <div className="Result">
            <div className="ResultHeader">
                <h2 className="location">{weatherData.address}</h2>
                <TimestampToDate timestamp={weatherData.currentWeather.date}/>
            </div>
            <CurrentWeather currentWeather={weatherData.currentWeather} />
              <Forecast forecast={weatherData.forecast}/>
        </div>
      );} else {
      return <div className="Result"/>;
  }
}