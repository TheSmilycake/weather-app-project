import React from 'react';
import TimestampToDate from './TimestampToDate'
import Forecast from './Forecast'
import WeatherIcon from "./WeatherIcon";
import ConditionString from "./ConditionString";

export default function Result({weatherData}) {

  if(weatherData !== "Miau") {
      return (
          <div className="Result">
            <div className="ResultHeader">
                <h2 className="location">{weatherData.address}</h2>
                <TimestampToDate timestamp={weatherData.currentDate}/>
            </div>
              <div className="CurrentWeather">
                  <div className="currentWeatherIcon">
                      <WeatherIcon icon="01d" size={60}/>
                  </div>
                  <div className="currentTemp">{Math.round(weatherData.currentTemp)}°C</div>
                  <div className="currentDetails">
                      <div className="currentDesc"><ConditionString conditions={weatherData.forecast[0].conditions}/></div>
                      <div className="currentHumidity" >Luftfeuchtigkeit: {Math.round(weatherData.currentHumidity)}%</div>
                      <div className="currentWindspeed">Windgeschwindigkeit: {Math.round(weatherData.currentWindspeed)} km/h</div>
                  </div>
              </div>
              <Forecast forecast={weatherData.forecast}/>
        </div>
      );} else {
      return <div className="Result"/>;
  }
}