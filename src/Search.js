import React, {useState} from 'react';
import axios from 'axios';

export default function Search(props) {
    const [city, setCity] = useState("Solingen");

    function updateCity(event) {
        return setCity(event.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
        const unitGroup = "metric";
        const forecastDays = 5;
        const aggregateHours = 24;
        const apiKey = "2T7PDGA7TM2FP45LV9XKW6J8M";
        let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${city}&aggregateHours=${aggregateHours}&forecastDays=${forecastDays}&lang=id&unitGroup=${unitGroup}&shortColumnNames=false&contentType=json&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse).catch(error => {
            if (error.response) {
                console.log(error.response);
            }
        });
    }

    function handleResponse(response) {
        // console.log(response.data);
        const responseLocation = Object.values(response.data.locations)[0];
        console.log(responseLocation);
        const weatherData = {
            city: responseLocation.id,
            address: responseLocation.address,
            lat: responseLocation.latitude,
            long: responseLocation.longitude,
            timezone: responseLocation.tz,
            currentWeather: {
                temp: responseLocation.currentConditions.temp,
                windspeed: responseLocation.currentConditions.wspd,
                date: new Date(responseLocation.currentConditions.datetime),
                humidity: responseLocation.currentConditions.humidity
            },
            forecast: []
        }

        responseLocation.values.forEach((value) => {
            let day = {
                date: new Date(value.datetimeStr),
                minTemp: value.mint,
                humidity: value.humidity,
                maxTemp: value.maxt,
                windspeed: value.wspd,
                conditions: value.conditions
            }
            weatherData.forecast.push(day)
        })
        console.log(weatherData);
        return props.getData(weatherData);
    }

    return (
        <div className="SearchForm">
            <form className="" onSubmit={searchCity}>
                <input className="" type="text" onChange={updateCity}/>
                <input className="" type="submit" value="Search"/>
            </form>

        </div>
    );
}