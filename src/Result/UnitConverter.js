import React, {useState} from "react";

export default function UnitConverter(props) {

    const [displayedTemp, setDisplayedTemp] = useState(Math.round(props.temp));
    const [displayedTempUnit, setDisplayedTempUnit] = useState("metric");

    function convertToImperial(event) {
        event.preventDefault();
        setDisplayedTempUnit("imperial");
        return setDisplayedTemp(Math.round((props.temp * 5) / 9 + 32));
    }

    function convertToMetric(event) {
        event.preventDefault();
        setDisplayedTempUnit("metric");
        return setDisplayedTemp(Math.round(props.temp));
    }

    if (displayedTempUnit === "imperial") {
        return <span className="UnitConverter">{displayedTemp}<button className="unitButton" onClick={convertToMetric}>°F</button></span>;
    } else {
        return <span className="UnitConverter">{displayedTemp}<button className="unitButton" onClick={convertToImperial}>°C</button></span>;
    }
}
