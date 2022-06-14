import React from 'react';
import './Result.css'
import CurrentWeather from './CurrentWeather'

export default function Result({weatherData}) {
    function toWeekday(day) {
      switch (day) {
        case 0: return "Sonntag";
        case 1: return "Montag";
        case 2: return "Dienstag";
        case 3: return "Mittwoch";
        case 4: return "Donnerstag";
        case 5: return "Freitag";
        case 6: return "Samstag";
      }

      
    }


  if(weatherData != "Miau") {
      return (<div className="Result mx-1">
        <div className="d-flex justify-content-between align-items-end">
          <span className="fs-3">{weatherData.CountryCode}, {weatherData.city}</span>
        <span className="fs-4">{weatherData.timestamp.getHours()}:{weatherData.timestamp.getMinutes()}</span>
</div>
        <div >
        <span className="fs-5">{toWeekday(weatherData.timestamp.getDay())},
           {" "}{weatherData.timestamp.getDate()}.{weatherData.timestamp.getMonth()}.{weatherData.timestamp.getFullYear()}</span>
          
        </div>
        <CurrentWeather current={weatherData.current}/>
        </div>);}
        else  { return <div className="Result"/>;}
}