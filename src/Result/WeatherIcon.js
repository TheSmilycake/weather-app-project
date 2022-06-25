import React from 'react';
import {
    WiCloudy,
WiCloudyGusts,
WiDaySunny,
WiDaySunnyOvercast,
WiDust,
WiHail,
WiLightning,
WiNA,
WiRain,
WiRainMix,
WiSandstorm,
WiSmoke,
WiSnow,
WiSnowflakeCold,
WiStormShowers,
WiThunderstorm,
WiTornado
} from 'weather-icons-react';

export default function WeatherIcon(props) {

    const conditionMap = {
        'type_1': 'WiSnow',
        'type_2': 'WiRain',
        'type_3': 'WiRain',
        'type_4': 'WiRain',
        'type_5': 'WiRain',
        'type_6': 'WiRain',
        'type_7': 'WiSandstorm',
        'type_8': 'WiDust',
        'type_9': 'WiRainMix',
        'type_10': 'WiRainMix',
        'type_11': 'WiRainMix',
        'type_12': 'WiDust',
        'type_13': 'WiRainMix',
        'type_14': 'WiRainMix',
        'type_15': 'WiTornado',
        'type_16': 'WiHail',
        'type_17': 'WiSnowflakeCold',
        'type_18': 'WiLightning',
        'type_19': 'WiDust',
        'type_20': 'WiRain',
        'type_21': 'WiRain',
        'type_22': 'WiRainMix',
        'type_23': 'WiRainMix',
        'type_24': 'WiRain',
        'type_25': 'WiRain',
        'type_26': 'WiRain',
        'type_27': 'WiDaySunnyOvercast',
        'type_28': 'WiCloudy',
        'type_29': 'WiNA',
        'type_30': 'WiSmoke',
        'type_31': 'WiSnow',
        'type_32': 'WiRainMix',
        'type_33': 'WiSnow',
        'type_34': 'WiSnow',
        'type_35': 'WiSnow',
        'type_36': 'WiCloudyGusts',
        'type_37': 'WiStormShowers',
        'type_38': 'WiThunderstorm',
        'type_39': 'WiSnow',
        'type_40': 'WiHail',
        'type_41': 'WiCloudy',
        'type_42': 'WiDaySunnyOvercast',
        'type_43': 'WiDaySunny'
    };
    
    let setIcon = 'Unbekannt';
    
    if(conditionMap[props.conditions[0]]) {
            setIcon = conditionMap[props.conditions[0]];
        } else {
            setIcon = 'WiNA';
         }
        
    switch (setIcon) {
        case "WiCloudy": return <WiCloudy size={props.size} color={props.color} />;
        case "WiCloudyGusts": return <WiCloudyGusts size={props.size} color={props.color} />;
        case "WiDaySunny": return <WiDaySunny size={props.size} color={props.color} />;
        case "WiDaySunnyOvercast": return <WiDaySunnyOvercast size={props.size} color={props.color} />;
        case "WiDust": return <WiDust size={props.size} color={props.color} />;
        case "WiHail": return <WiHail size={props.size} color={props.color} />;
        case "WiLightning": return <WiLightning size={props.size} color={props.color} />;
        case "WiNA": return <WiNA size={props.size} color={props.color} />;
        case "WiRain": return <WiRain size={props.size} color={props.color} />;
        case "WiRainMix": return <WiRainMix size={props.size} color={props.color} />;
        case "WiSandstorm": return <WiSandstorm size={props.size} color={props.color} />;
        case "WiSmoke": return <WiSmoke size={props.size} color={props.color} />;
        case "WiSnow": return <WiSnow size={props.size} color={props.color} />;
        case "WiSnowflakeCold": return <WiSnowflakeCold size={props.size} color={props.color} />;
        case "WiStormShowers": return <WiStormShowers size={props.size} color={props.color} />;
        case "WiThunderstorm": return <WiThunderstorm size={props.size} color={props.color} />;
        case "WiTornado": return <WiTornado size={props.size} color={props.color} />;
        default: return <WiNA size={props.size} color={props.color} />;
    }

}

WeatherIcon.defaultProps = {
    conditions: ['unknown'],
    size: 100,
    color: "#000"
}