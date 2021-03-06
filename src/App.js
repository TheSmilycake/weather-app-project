import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Search from './Search'
import Result  from './Result/Result'



function App() {
    const [weatherData, setWeatherData] = useState("NoSearch");
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
            <footer>
                <a href="https://github.com/TheSmilycake/weather-app-project">GitHub Repo</a> Made by Rebecca Wiedau
            </footer>
        </div>
    );
}

export default App;