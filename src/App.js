import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Search from './Search'
import Result  from './Result'
function App() {
    const [weatherData, setWeatherData] = useState("Miau");
    function updateWeatherData(apiResponse) {
        setWeatherData(apiResponse)
    }

    return (
        <div className="App">
            <Search getData={updateWeatherData}/>
            <Result weatherData={weatherData}/>
        </div>
    );
}

export default App;
// const [weatherData, setWeatherData] = useState({});
//
//     function logWeatherData(searchData) {
//        setWeatherData(searchData);
//        console.log(weatherData);
//     }
//
//     return (
//         <div className="App">
//             <h1>Returning State Back to Parent</h1>
//             <Search getData={logWeatherData} />
//         </div>
//     );