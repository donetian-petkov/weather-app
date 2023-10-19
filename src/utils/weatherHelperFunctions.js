import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faCloudBolt, faCloudRain, faMoon, faSmog, faSnowflake, faSun} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const thunderWeather = (condition) => {

    if (condition.includes("thunder")) {
        return (
            <FontAwesomeIcon icon={faCloudBolt} shake size="2xl"/>
        )
    }

}

export const weatherCondition = (condition, isDay) => {

    if (condition.match(/rain|drizzle/i)) {
        return (
            <FontAwesomeIcon icon={faCloudRain} bounce size="2xl"/>
        )
    } else if (condition.match(/snow|sleet|ice|blizzard/i)) {
        return (
            <FontAwesomeIcon icon={faSnowflake} spin size="2xl"/>
        )
    } else if (condition.match(/mist|fog/i)) {
        return (
            <FontAwesomeIcon icon={faSmog} fade size="2xl"/>
        )
    } else if (condition.match(/cloudy|overcast/i)) {
        return (
            <FontAwesomeIcon icon={faCloud} fade size="2xl"/>
        )
    } else if (isDay === 0 && condition.match(/clear/i)) {
        return (
            <FontAwesomeIcon icon={faMoon} flip size="2xl"/>
        )
    } else {
        return (
            <FontAwesomeIcon icon={faSun} beat size="2xl"/>
        )
    }
}

export const matchCondition = (condition, isDay) => {

    let matchedCondition;

    if (isDay === 0) {
        matchedCondition = 'night';
    } else if (condition.match(/rain|drizzle/i)) {
        matchedCondition = 'rainy';
    } else if (condition.match(/snow|sleet|ice|blizzard/i)) {
        matchedCondition = 'snowy';
    } else if (condition.match(/mist|fog/i)) {
        matchedCondition = 'misty';
    } else if (condition.match(/cloudy|overcast/i)) {
        matchedCondition = 'cloudy';
    } else {
        matchedCondition = 'sunny';
    }

    return matchedCondition;
}