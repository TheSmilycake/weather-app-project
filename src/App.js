import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Search from './Search'
import Result  from './Result/Result'



function App() {
    const [weatherData, setWeatherData] = useState("Miau");
    function updateWeatherData(apiResponse) {
        setWeatherData(apiResponse)
    }

    return (
        <div className="App">
            <header>
                <h1 className="WetterAppTitle">WetterApp</h1>
            </header>
            <Search getData={updateWeatherData}/>
            <Result weatherData={weatherData}/>
        </div>
    );
}

export default App;