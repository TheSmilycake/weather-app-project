import React from 'react';
import {
    WiDaySunny, WiNightClear, WiDayCloudy, WiCloud, WiNA, WiNightAltCloudy, WiCloudy, WiRain, WiDayShowers, WiNightAltShowers, WiThunderstorm, WiFog, WiSnow
} from 'weather-icons-react';

export default function WeatherIcon(props) {
    const size = props.size ? props.size : 100;
    const dayColor = "#CC6600";
    const nightColor = "#000066";
    switch (props.icon) {
        case "01d": return <WiDaySunny size={size} color={dayColor} />;
        case "02d": return <WiDayCloudy size={size} color={dayColor} />;
        case "01n": return <WiNightClear size={size} color={nightColor} />;
        case "02n": return <WiNightAltCloudy size={size} color={nightColor} />;
        case "03d": return <WiCloud size={size} color={dayColor} />;
        case "03n": return <WiCloud size={size} color={nightColor} />;
        case "04d": return <WiCloudy size={size} color={dayColor} />;
        case "04n": return <WiCloudy size={size} color={nightColor} />;
        case "09d": return <WiRain size={size} color={dayColor} />;
        case "09n": return <WiRain size={size} color={nightColor} />;
        case "10d": return <WiDayShowers size={size} color={dayColor} />;
        case "10n": return <WiNightAltShowers size={size} color={nightColor} />;
        case "11d": return <WiThunderstorm size={size} color={dayColor} />;
        case "11n": return <WiThunderstorm size={size} color={nightColor} />;
        case "13d": return <WiSnow size={size} color={dayColor} />;
        case "13n": return <WiSnow size={size} color={nightColor} />;
        case "50d": return <WiFog size={size} color={dayColor} />;
        case "50n": return <WiFog size={size} color={nightColor} />;
        default: return <WiNA size={size} color={"black"} />;
    }

}
/*
openweather
01d.png 	01n.png 	clear sky		WiDaySunny, WiNightClear
02d.png 	02n.png 	few clouds		WiDayCloudy, WiNightAltCloudy
03d.png 	03n.png 	scattered clouds	WiCloud,
04d.png 	04n.png 	broken clouds		WiCloudy,
09d.png 	09n.png 	shower rain		WiRain,
10d.png 	10n.png 	rain			WiDayShowers, WiNightAltShowers
11d.png 	11n.png 	thunderstorm		WiThunderstorm,
13d.png 	13n.png 	snow			WiSnow,
50d.png 	50n.png 	mist			WiFog

nothing WiNA

*/