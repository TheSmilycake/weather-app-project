import React from 'react';

export default function ConditionString(props) {
    const conditionMap = {
        'type_1': 'Schneeverwehungen',
        'type_2': 'Niesleregen',
        'type_3': 'Starker Niesleregen',
        'type_4': 'Leichter Niesleregen',
        'type_5': 'Starker Niesleregen/Regen',
        'type_6': 'Leichter Niesleregen/Regen',
        'type_7': 'Staubsturm',
        'type_8': 'Nebel',
        'type_9': 'gefrierende Niederschläge',
        'type_10': 'Starker gefrierender Nieselregen',
        'type_11': 'Leichter gefrierender Nieselregen',
        'type_12': 'Gefrierender Nebel',
        'type_13': 'Starker Gefrierender Regen',
        'type_14': 'Leichter Gefrierender Regen',
        'type_15': 'Wolkenschlauch/Tornado',
        'type_16': 'Hagelschauer',
        'type_17': 'Eis',
        'type_18': 'Blitze ohne Donner',
        'type_19': 'Dunst',
        'type_20': 'Niederschlag',
        'type_21': 'Regen',
        'type_22': 'Starker Regen und Schnee',
        'type_23': 'Leichter Regen und Schnee',
        'type_24': 'Regenschauer',
        'type_25': 'Starker Regen',
        'type_26': 'Leichter Regen',
        'type_27': 'Abnehmende Bedeckung',
        'type_28': 'Zuhnemende Bedeckung',
        'type_29': 'Unverändert',
        'type_30': 'Rauch oder Hitzeflimmern',
        'type_31': 'Schnee',
        'type_32': 'Schnee und Regen Schauer',
        'type_33': 'Schnee Schauer',
        'type_34': 'Starker Schneefall',
        'type_35': 'Leichter Schneefall',
        'type_36': 'Sturmbö',
        'type_37': 'Gewitter',
        'type_38': 'Gewitter ohne Niederschlag',
        'type_39': 'Polarschnee',
        'type_40': 'Hagel',
        'type_41': 'Bedeckt',
        'type_42': 'Teilweise bewölkt',
        'type_43': 'Klar'
    };

    let conditionText = '';

    props.conditions.forEach((conditon, index, array) => {
        conditionText += conditionMap[conditon];
        if (index < array.length - 1) {
            conditionText += ', ';
        }
    })

    return (
        <span className="ConditionString">
            {conditionText}
        </span>);
}

ConditionString.defaultProps = {
    conditions: ['unknown']
}
