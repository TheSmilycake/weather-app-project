import React from 'react';

export default function Result(props) {
    if (props.weatherData) {
        return (<div className="Result mt-5">
            <div>{props.weatherData}</div>
        </div>);
    } else {
        return (<div className="Result mt-5">
         RESULT
        </div>);
    }
}