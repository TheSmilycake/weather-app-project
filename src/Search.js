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
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response.data);
        // return props.getData(response.data);
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

