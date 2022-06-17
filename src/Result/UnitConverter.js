import React from "react";

export default function UnitConverter(props) {
    let displayedTemp = {
        imperial: Math.round((props.temp * 5) / 9 + 32),
        metric: Math.round(props.temp)
    };

    if (props.unit === "imperial") {
        return <span className="UnitConverter">{displayedTemp.imperial}°F</span>;
    } else {
        return <span className="UnitConverter">{displayedTemp.metric}°C</span>;
    }
}
