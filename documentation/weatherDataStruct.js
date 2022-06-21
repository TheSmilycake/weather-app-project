const response = {
    data: {
        "columns": {
            "locations": {
                "Solingen": {
                    "values": [
                        {
                            "datetimeStr": "2022-06-21T00:00:00+02:00",
                            "mint": 15.0,
                            "humidity": 61.4,
                            "maxt": 20.4,
                            "wspd": 5.1,
                            "conditions": "type_42"
                        },
                        {
                            "datetimeStr": "2022-06-22T00:00:00+02:00",
                            "mint": 11.0,
                            "humidity": 60.8,
                            "maxt": 26.6,
                            "wspd": 6.6,
                            "conditions": "type_43"
                        },
                        {
                            "datetimeStr": "2022-06-23T00:00:00+02:00",
                            "mint": 15.5,
                            "humidity": 65.0,
                            "maxt": 27.6,
                            "wspd": 7.8,
                            "conditions": "type_21, type_42"
                        },
                        {
                            "datetimeStr": "2022-06-24T00:00:00+02:00",
                            "mint": 17.9,
                            "humidity": 93.0,
                            "maxt": 20.8,
                            "wspd": 5.2,
                            "conditions": "type_21, type_41"
                        },
                        {
                            "datetimeStr": "2022-06-25T00:00:00+02:00",
                            "mint": 15.9,
                            "humidity": 78.2,
                            "maxt": 24.3,
                            "wspd": 7.1,
                            "conditions": "type_41"
                        },
                        {
                            "datetimeStr": "2022-06-26T00:00:00+02:00",
                            "mint": 14.3,
                            "humidity": 63.7,
                            "maxt": 22.8,
                            "wspd": 12.0,
                            "conditions": "type_42"
                        }
                    ],
                    "id": "Solingen",
                    "address": "Solingen, Nordrhein-Westfalen, Deutschland",
                    "name": "Solingen",
                    "latitude": 51.1668,
                    "longitude": 7.08844,
                    "tz": "Europe/Berlin",
                    "currentConditions": {
                        "temp": 20.5,
                        "wspd": 11.2,
                        "datetime": "2022-06-21T13:00:19+02:00",
                        "humidity": 48.3
                    }
                }
            }
        }
    }
};


const responseLocation = response.data.columns.locations.Solingen;
const weatherData = {
    city: responseLocation.id,
    address: responseLocation.address,
    lat: responseLocation.latitude,
    long: responseLocation.longitude,
    timezone: responseLocation.tz,
    currentWeather: {
        temp: responseLocation.currentConditions.temp,
        windspeed: responseLocation.currentConditions.wspd,
        date: new Date(responseLocation.currentConditions.datetime),
        humidity: responseLocation.currentConditions.humidity
    },
    forecast: []
}

responseLocation.values.forEach((value) => {
    let day = {
        date: new Date(value.datetimeStr),
        minTemp: value.mint,
        humidity: value.humidity,
        maxTemp: value.maxt,
        windspeed: value.wspd,
        conditions: value.conditions
    }
    weatherData.forecast.push(day)
})




console.log(weatherData);