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
        const forecastDays = 7;
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
        const responseLocation = Object.values(response.data.locations)[0];
        const weatherData = {
            city: responseLocation.id,
            address: responseLocation.address,
            lat: responseLocation.latitude,
            long: responseLocation.longitude,
            timezone: responseLocation.tz,
            currentTemp: responseLocation.currentConditions.temp,
            currentWindspeed: responseLocation.currentConditions.wspd,
            currentDate: new Date(responseLocation.currentConditions.datetime),
            currentHumidity: responseLocation.currentConditions.humidity,
            forecast: []
        }

        responseLocation.values.forEach((value) => {
            const conditionsArray = value.conditions.split(',');
            let day = {
                date: new Date(value.datetimeStr),
                minTemp: value.mint,
                humidity: value.humidity,
                maxTemp: value.maxt,
                windspeed: value.wspd,
                conditions: conditionsArray.map(condition => {
                    return condition.trim();
                })
            }
            weatherData.forecast.push(day)
        })

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