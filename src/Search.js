import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'

export default function Search(props) {
    const [city, setCity] = useState("Solingen");

    function updateCity(event) {
        return setCity(event.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
        const apiKey = "cf9b8c1615a0fa6c1dcb29c5a1e4698f";
        const unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=DE&units=${unit}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse).catch(error => {
            if(error.response) {
                console.log(error.response);
            }
        });
    }

    function handleResponse(response) {
console.log(response.data);
        const weatherData = {
            "city": response.data.name,
            "timestamp": new Date(response.data.dt * 1000),
            "CountryCode": response.data.sys.country,
            "current": {
                "description": response.data.weather[0].description,
                "temp": Math.round(response.data.main.temp),
                "humidity": response.data.main.humidity,
                "wind": Math.round(response.data.wind.speed * 3.6),
                "weatherID": response.data.weather[0].id,
                "weatherIcon": response.data.weather[0].icon
            },
            "forecast": {
                "today": {},
                "nextDays": [{},{},{},{}]
            }
        }
    
        return props.getData(weatherData);
    }

    return (
        <div className="SearchForm">
            <form className="d-flex" onSubmit={searchCity}>
                <input className="border-info form-control me-2" type="text" onChange={updateCity}/>
                <input className="btn btn-info" type="submit" value="Search"/>
            </form>
        </div>
    );
}

// export default function Search(props) {
//     const name="Oluwafisayo"
//     return(
//         <div>
//             <form onSubmit={()=>props.getData(name)} >
//                 <input type="text"/>
//                 <input type="submit" />
//             </form>
//             <button onClick={()=>props.getData(name)} >Click Me</button>
//         </div>
//     )
// }

