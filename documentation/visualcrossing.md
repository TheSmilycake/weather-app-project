# Weather Api visualcrossing

## API Call

/forecast – provides access to up to 15-days of weather forecast information

```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata
/forecast?locations=Herndon&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=csv&key=YOURAPIKEY
```

### Parameter

#### locations

One or more address, partial address or latitude, longitude values for the required locations.
Addresses can be specified as full addresses. The system will also attempt to match partial addresses such as city,
state, zip code, postal code and other common formats.

When specify a point based on longitude, latitude, the format must be specified as latitude,longitude where both
latitude
and longitude are in decimal degrees. latitude should run from -90 to 90 and longitude from -180 to 180 (with 0 being at
the prime meridian through London, UK).

Data for multiple locations can be requested in a single request by concatenating multiple locations using the pipe (|)
character.

#### aggregateHours

The interval between weather forecast data in the output. 1 represents an hourly forecast,
24 represents a daily forecast. As the source data is calculated at the hourly level, records calculated
at 12 or 24 hours are aggregated to indicate the predominant weather condition during that time period.
For example the maximum temperature, total precipitation, maximum windspeed etc.
Supported values 1, 12 or 24.

#### forecastDays

Integer indicating the maximum number of days of forecast to retrieve. For example, forecastDays=5 will return a 5 day
forecast.

#### alertLevel

Retrieve weather alerts as part of a weather forecast. See Weather Alerts for more information

#### includeAstronomy

Retrieve astronomical data such as moonphase, sunrise and sunset times. Set to true to enable. See Astronomy Information
for more information.

#### unitGroup

The system of units used for the output data.
Supported values are us,uk,metric,base. See Unit groups and measurement units for more information.

#### outputDateTimeFormat

specifies the date and time format used when returning the output.

#### shortColumnNames

When false, the returned dataset includes descriptive column names. When true, returns shorter,
abbreviated column names with only alphanumeric characters. The short names are useful for programmatic use of the data.

#### contentType

Selected between CSV or json output format. Supported values: ‘csv’ or ‘json’

#### locationMode

Requests the structure that will be used for the output locations in the JSON output format. Supported values:
single,array, or lookup. See the JSON documentation for more information on how this parameters affects the output JSON
structure

#### iconSet

returns fixed set of the icons names based on the weather conditions. Currently supported value is ‘ icons1’ (
foundicons2)

#### lang

Sets the language of the translatable parts of the output such as the conditions field. Available languages are en, de,
fr and es. In addition passing in ‘id’ will result in the raw descriptor IDs.

#### key

API key for your account.

| parameter        | values                             |
|------------------|------------------------------------|
| locations        | searching city                     |
| aggregateHours   | 24                                 | 
| forecastDays     | 5                                  |
| contentType      | json                               |
| key              | APIkey   2T7PDGA7TM2FP45LV9XKW6J8M |
| shortColumnNames | true                               |
| unitGroup        | metric                             |
| lang             | id                                 |

## Übersetzung - Jan 11, 2021 (GitHub Visualcrossing)

### Values / Bezeichnungen

| id               | Deutsch                              | Englisch                |
|------------------|--------------------------------------|-------------------------|
| sky              | Bewölkung                            | Sky cover               |
| wdir             | Windrichtung                         | Wind direction          |
| temp             | Temperatur                           | Temperature             |
| dew              | Taupunkt                             | Dew Point               |
| humidity         | Relative Feuchtigkeit                | Relative Humidity       |
| heatindex        | Hitze Index                          | Heat Index              |
| maxt             | Höchsttemperatur                     | Maximum Temperature     |
| mint             | Tiefsttemperatur                     | Minimum Temperature     |
| wspd             | Windgeschwindigkeit                  | Wind Speed              |
| wgust            | Windböen                             | Wind Gust               |
| wdir             | Windrichtung                         | Wind Direction          |
| precip           | Niederschlag                         | Precipitation           |
| estprecip        | Erwarteter Niederschlag              | Estimated precipitation |
| precipcover      | Niederschlagsverteilung              | Precipitation Cover     |
| visibility       | Sicht                                | Visibility              | 
| cloudcover       | Bewölkungsdichte                     | Cloud Cover             |
| latlon           | Längen- und Breitengrad              | Latitude & Longitude    |
| address          | Adresse                              | Address                 | 
| sealevelpressure | Meeresspiegeldruck                   | Sea Level Pressure      |
| stationdistance  | Durchschnittliche Stationsentfernung | Mean Station Distance   |
| pop              | Chance                               | Precipitation (%)       |  
| snow             | Schnee                               | Snow                    |
| snowdepth        | Schneehöhe                           | Snow Depth              |
| windchill        | x                                    | Wind Chill              |
| solarradiation   | x                                    | Solar Radiation         |
| solarenergy      | x                                    | Solar Energy            |
| sunshine         | x                                    | Sunshine                |
| stationInfo      | Beitragende  Stationen               | Contributing Stations   |
| weatherType      | Wettertyp                            | Weather Type            |

### Condition Codes

| id      | Deutsch                                              | Englisch                              |
|---------|------------------------------------------------------|---------------------------------------|
| type_1  | Schneeverwehungen                                    | Blowing Or Drifting Snow              |     
| type_2  | Niesleregen                                          | Drizzle                               |            
| type_3  | Starker Niesleregen                                  | Heavy Drizzle                         |     
| type_4  | Leichter Niesleregen                                 | Light Drizzle                         |        
| type_5  | Starker Niesleregen/Regen                            | Heavy Drizzle/Rain                    |
| type_6  | Leichter Niesleregen/Regen                           | Light Drizzle/Rain                    |
| type_7  | Staubsturm                                           | Duststorm                             |     
| type_8  | Nebel                                                | Fog                                   |           
| type_9  | gefrierende Niederschläge                            | Freezing Drizzle/Freezing Rain        |
| type_10 | Starker gefrierender Niesleregen/gefrierender Regen  | Heavy Freezing Drizzle/Freezing Rain  |
| type_11 | Leichter gefrierender Niesleregen/gefrierender Regen | SLight Freezing Drizzle/Freezing Rain |
| type_12 | Gefrierender Nebel                                   | Freezing Fog                          |
| type_13 | Starker Gefrierender Regen                           | Heavy Freezing Rain                   |
| type_14 | Leichter Gefrierender Regen                          | Light Freezing Rain                   |
| type_15 | Wolkenschlauch/Tornado                               | Funnel Cloud/Tornado                  |
| type_16 | Hagelschauer                                         | Hail Showers                          |
| type_17 | Eis                                                  | Ice                                   |
| type_18 | Blitze ohne Donner                                   | Lightning Without Thunder             |
| type_19 | Dunst                                                | Mist                                  |
| type_20 | Niederschlag                                         | Precipitation In Vicinity             |
| type_21 | Regen                                                | Rain                                  |
| type_22 | Starker Regen und Schnee                             | Heavy Rain And Snow                   |
| type_23 | Leichter Regen und Schnee                            | Light Rain And Snow                   |
| type_24 | Regenschauer                                         | Rain Showers                          |
| type_25 | Starker Regen                                        | Heavy Rain                            |
| type_26 | Leichter Regen                                       | Light Rain                            |
| type_27 | Abnehmende Bedeckung                                 | Sky Coverage Decreasing               |
| type_28 | Zuhnemende Bedeckung                                 | Sky Coverage Increasing               |
| type_29 | Unverändert                                          | Sky Unchanged                         |
| type_30 | Rauch oder Hitzeflimmern                             | Smoke Or Haze                         |
| type_31 | Schnee                                               | Snow                                  |
| type_32 | Schnee und Regen Schauer                             | Snow And Rain Showers                 |
| type_33 | Schnee Schauer                                       | Snow Showers                          |
| type_34 | Starker Schneefall                                   | Heavy Snow                            |
| type_35 | Leichter Schneefall                                  | Light Snow                            |
| type_36 | Sturmbö                                              | Squalls                               |
| type_37 | Gewitter                                             | Thunderstorm                          |
| type_38 | Gewitter ohne Niederschlag                           | Thunderstorm Without Precipitation    |
| type_39 | Polarschnee                                          | Diamond Dust                          |
| type_40 | Hagel                                                | Hail                                  |
| type_41 | Bedeckt                                              | Overcast                              |
| type_42 | Teilweise bewölkt                                    | Partially cloudy                      |
| type_43 | klar                                                 | Clear                                 |

## API Response <=> WeatherStruct

### JSON Response

#### API URL

```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=Solingen&aggregateHours=24&forecastDays=5&unitGroup=metric&shortColumnNames=true&contentType=json&lang=id&key={APIkey}
```
<details><summary>Complete Example Response</summary>

```json
{
  "columns": {
    "wdir": {
      "id": "wdir",
      "name": "wdir",
      "type": 2,
      "unit": null
    },
    "uvindex": {
      "id": "uvindex",
      "name": "weather_uvindex",
      "type": 2,
      "unit": null
    },
    "latitude": {
      "id": "latitude",
      "name": "Latitude",
      "type": 2,
      "unit": null
    },
    "preciptype": {
      "id": "preciptype",
      "name": "weather_preciptype",
      "type": 1,
      "unit": null
    },
    "cin": {
      "id": "cin",
      "name": "weather_cin",
      "type": 2,
      "unit": null
    },
    "cloudcover": {
      "id": "cloudcover",
      "name": "cloudcover",
      "type": 2,
      "unit": null
    },
    "pop": {
      "id": "pop",
      "name": "pop",
      "type": 2,
      "unit": null
    },
    "mint": {
      "id": "mint",
      "name": "mint",
      "type": 2,
      "unit": "degC"
    },
    "datetime": {
      "id": "datetime",
      "name": "Date time",
      "type": 3,
      "unit": null
    },
    "precip": {
      "id": "precip",
      "name": "precip",
      "type": 2,
      "unit": "mm"
    },
    "solarradiation": {
      "id": "solarradiation",
      "name": "solarradiation",
      "type": 2,
      "unit": null
    },
    "dew": {
      "id": "dew",
      "name": "dew",
      "type": 2,
      "unit": "degc"
    },
    "humidity": {
      "id": "humidity",
      "name": "humidity",
      "type": 2,
      "unit": null
    },
    "longitude": {
      "id": "longitude",
      "name": "Longitude",
      "type": 2,
      "unit": null
    },
    "temp": {
      "id": "temp",
      "name": "temp",
      "type": 2,
      "unit": "degc"
    },
    "address": {
      "id": "address",
      "name": "Address",
      "type": 1,
      "unit": null
    },
    "maxt": {
      "id": "maxt",
      "name": "maxt",
      "type": 2,
      "unit": "degC"
    },
    "visibility": {
      "id": "visibility",
      "name": "visibility",
      "type": 2,
      "unit": "km"
    },
    "wspd": {
      "id": "wspd",
      "name": "wspd",
      "type": 2,
      "unit": "kph"
    },
    "severerisk": {
      "id": "severerisk",
      "name": "weather_severerisk",
      "type": 2,
      "unit": null
    },
    "solarenergy": {
      "id": "solarenergy",
      "name": "solarenergy",
      "type": 2,
      "unit": null
    },
    "resolvedAddress": {
      "id": "resolvedAddress",
      "name": "Resolved Address",
      "type": 1,
      "unit": null
    },
    "heatindex": {
      "id": "heatindex",
      "name": "heatindex",
      "type": 2,
      "unit": "degc"
    },
    "snowdepth": {
      "id": "snowdepth",
      "name": "snowdepth",
      "type": 2,
      "unit": "cm"
    },
    "sealevelpressure": {
      "id": "sealevelpressure",
      "name": "sealevelpressure",
      "type": 2,
      "unit": "mb"
    },
    "snow": {
      "id": "snow",
      "name": "snow",
      "type": 2,
      "unit": "cm"
    },
    "name": {
      "id": "name",
      "name": "Name",
      "type": 1,
      "unit": null
    },
    "wgust": {
      "id": "wgust",
      "name": "wgust",
      "type": 2,
      "unit": "kph"
    },
    "conditions": {
      "id": "conditions",
      "name": "Conditions",
      "type": 1,
      "unit": null
    },
    "windchill": {
      "id": "windchill",
      "name": "windchill",
      "type": 2,
      "unit": "degc"
    },
    "cape": {
      "id": "cape",
      "name": "weather_cape",
      "type": 2,
      "unit": null
    }
  },
  "remainingCost": 0,
  "queryCost": 1,
  "messages": null,
  "locations": {
    "Solingen": {
      "stationContributions": null,
      "values": [
        {
          "wdir": 72.2,
          "uvindex": 4.0,
          "datetimeStr": "2022-06-21T00:00:00+02:00",
          "preciptype": "",
          "cin": 0.0,
          "cloudcover": 62.3,
          "pop": 0.0,
          "mint": 15.0,
          "datetime": 1655769600000,
          "precip": 0.0,
          "solarradiation": 390.0,
          "dew": 11.2,
          "humidity": 61.4,
          "temp": 18.9,
          "maxt": 20.4,
          "visibility": 24.1,
          "wspd": 5.1,
          "severerisk": 10.0,
          "solarenergy": 1.4,
          "heatindex": null,
          "snowdepth": 0.0,
          "sealevelpressure": 1013.5,
          "snow": 0.0,
          "wgust": 19.4,
          "conditions": "type_42",
          "windchill": null,
          "cape": 0.0
        },
        {
          "wdir": 66.6,
          "uvindex": 3.5,
          "datetimeStr": "2022-06-22T00:00:00+02:00",
          "preciptype": "",
          "cin": 0.0,
          "cloudcover": 10.6,
          "pop": 0.0,
          "mint": 11.0,
          "datetime": 1655856000000,
          "precip": 0.0,
          "solarradiation": 350.3,
          "dew": 10.2,
          "humidity": 60.8,
          "temp": 19.4,
          "maxt": 26.6,
          "visibility": 24.1,
          "wspd": 6.6,
          "severerisk": 10.0,
          "solarenergy": 1.3,
          "heatindex": 26.9,
          "snowdepth": 0.0,
          "sealevelpressure": 1011.7,
          "snow": 0.0,
          "wgust": 33.8,
          "conditions": "type_43",
          "windchill": null,
          "cape": 0.0
        },
        {
          "wdir": 136.4,
          "uvindex": 3.3,
          "datetimeStr": "2022-06-23T00:00:00+02:00",
          "preciptype": "",
          "cin": -22.4,
          "cloudcover": 51.8,
          "pop": 57.1,
          "mint": 15.5,
          "datetime": 1655942400000,
          "precip": 0.9,
          "solarradiation": 322.9,
          "dew": 14.8,
          "humidity": 65.0,
          "temp": 21.8,
          "maxt": 27.6,
          "visibility": 8.1,
          "wspd": 7.8,
          "severerisk": 9.7,
          "solarenergy": 1.2,
          "heatindex": 28.2,
          "snowdepth": 0.0,
          "sealevelpressure": 1011.4,
          "snow": 0.0,
          "wgust": 41.0,
          "conditions": "type_21, type_42",
          "windchill": null,
          "cape": 28.4
        },
        {
          "wdir": 161.8,
          "uvindex": 2.2,
          "datetimeStr": "2022-06-24T00:00:00+02:00",
          "preciptype": "",
          "cin": -37.1,
          "cloudcover": 100.0,
          "pop": 57.1,
          "mint": 17.9,
          "datetime": 1656028800000,
          "precip": 12.2,
          "solarradiation": 218.0,
          "dew": 18.4,
          "humidity": 93.0,
          "temp": 19.6,
          "maxt": 20.8,
          "visibility": 5.0,
          "wspd": 5.2,
          "severerisk": 9.4,
          "solarenergy": 0.8,
          "heatindex": 27.1,
          "snowdepth": 0.0,
          "sealevelpressure": 1009.7,
          "snow": 0.0,
          "wgust": 23.8,
          "conditions": "type_21, type_41",
          "windchill": null,
          "cape": 252.0
        },
        {
          "wdir": 159.3,
          "uvindex": 2.1,
          "datetimeStr": "2022-06-25T00:00:00+02:00",
          "preciptype": "",
          "cin": -16.9,
          "cloudcover": 77.1,
          "pop": 38.1,
          "mint": 15.9,
          "datetime": 1656115200000,
          "precip": 0.0,
          "solarradiation": 213.3,
          "dew": 15.5,
          "humidity": 78.2,
          "temp": 19.8,
          "maxt": 24.3,
          "visibility": 24.1,
          "wspd": 7.1,
          "severerisk": 9.7,
          "solarenergy": 0.8,
          "heatindex": null,
          "snowdepth": 0.0,
          "sealevelpressure": 1009.8,
          "snow": 0.0,
          "wgust": 25.6,
          "conditions": "type_41",
          "windchill": null,
          "cape": 38.8
        },
        {
          "wdir": 240.7,
          "uvindex": 2.8,
          "datetimeStr": "2022-06-26T00:00:00+02:00",
          "preciptype": "",
          "cin": -21.3,
          "cloudcover": 64.4,
          "pop": 47.6,
          "mint": 14.3,
          "datetime": 1656201600000,
          "precip": 6.2,
          "solarradiation": 269.5,
          "dew": 10.2,
          "humidity": 63.7,
          "temp": 18.4,
          "maxt": 22.8,
          "visibility": 14.2,
          "wspd": 12.0,
          "severerisk": 9.5,
          "solarenergy": 1.0,
          "heatindex": null,
          "snowdepth": 0.0,
          "sealevelpressure": 1012.0,
          "snow": 0.0,
          "wgust": 33.8,
          "conditions": "type_42",
          "windchill": null,
          "cape": 26.0
        }
      ],
      "id": "Solingen",
      "address": "Solingen, Nordrhein-Westfalen, Deutschland",
      "name": "Solingen",
      "index": 0,
      "latitude": 51.1668,
      "longitude": 7.08844,
      "distance": 0.0,
      "time": 0.0,
      "tz": "Europe/Berlin",
      "currentConditions": {
        "wdir": 140.0,
        "temp": 20.5,
        "sunrise": "2022-06-21T05:16:12+02:00",
        "visibility": 10.0,
        "wspd": 11.2,
        "icon": "clear-day",
        "stations": "",
        "heatindex": null,
        "cloudcover": null,
        "datetime": "2022-06-21T13:00:19+02:00",
        "precip": null,
        "moonphase": 0.78,
        "snowdepth": null,
        "sealevelpressure": 1015.0,
        "dew": 9.2,
        "sunset": "2022-06-21T21:50:46+02:00",
        "humidity": 48.3,
        "wgust": null,
        "windchill": null
      },
      "alerts": null
    }
  }
}
```
</details>

<details><summary>weatherData
</summary>


|`` weatherData ``||

</details>