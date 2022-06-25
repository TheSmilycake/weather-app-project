import React from "react";

export default function TimestampToDate(props) {
    const date = props.timestamp;

    function twoDigitFormat(number) {
        if (number < 10) {
            number = `0${number}`;
        }
        return number;
    }

    const weekdays = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
    ];

    let dateStruct = {
        weekday: weekdays[date.getDay()],
        year: date.getFullYear(),
        day: twoDigitFormat(date.getDate()),
        month: twoDigitFormat(date.getMonth() + 1),
        hour: twoDigitFormat(date.getHours()),
        minutes: twoDigitFormat(date.getMinutes())
    };
    if (props.sun === true) {
        return (
            <span className="TimestampToDate SunTime">
                {dateStruct.hour}:{dateStruct.minutes}
            </span>
        );
    } else if (props.weekdayOnly === true) {
        return (
            <span className="TimestampToDate weekdayOnly">
                {dateStruct.weekday} · {dateStruct.day}.{dateStruct.month}
            </span>
        );
    } else {
        return (
            <span className="TimestampToDate">
                {dateStruct.day}.{dateStruct.month}.{dateStruct.year} · {dateStruct.weekday} {dateStruct.hour}:{dateStruct.minutes}
            </span>
        );
    }
}

TimestampToDate.defaultProps = {
    weekdayOnly: false
}
