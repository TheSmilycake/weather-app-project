import React, {useState} from 'react';
import axios from 'axios';

export default function Search(props) {
    const [city, setCity] = useState("Solingen");

    function updateCity(event) {
        return setCity(event.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
        const unit = "metric";
        const apiKey = "cf9b8c1615a0fa6c1dcb29c5a1e4698f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=DE&units=${unit}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse).catch(error => {
            if (error.response) {
                console.log(error.response);
            }
        });
    }

    function handleResponse(response) {
        console.log(response.data);
        const weatherData = {
            "city": response.data.name,
            "timestamp": response.data.dt,
            "CountryCode": response.data.sys.country,
            "current": {
                "sunrise": response.data.sys.sunrise,
                "sunset": response.data.sys.sunset,
                "description": response.data.weather[0].description,
                "temp": response.data.main.temp,
                "humidity": response.data.main.humidity,
                "wind": Math.round(response.data.wind.speed * 3.6),
                "weatherID": response.data.weather[0].id,
                "weatherIcon": response.data.weather[0].icon
            },
            "forecast": [{
                "timestamp": 1655719259,
                "icon": "50d",
                "maxTemp": 18.03,
                "minTemp": 10.02
            }, {
                "timestamp": 1655805659,
                "icon": "02n",
                "maxTemp": 19.03,
                "minTemp": 10
            }, {
                "timestamp": 1655892059,
                "icon": "03d",
                "maxTemp": 22,
                "minTemp": 12
            }, {
                "timestamp": 1656064859,
                "icon": "01d",
                "maxTemp": 21,
                "minTemp": 18
            }, {
                "timestamp": 1656151259,
                "icon": "04d",
                "maxTemp": 19,
                "minTemp": 16
            }]
        }

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