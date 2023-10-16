import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faSmog, faCloudRain, faSnowflake, faCloudBolt, faCloud, faMoon} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {WeatherCard} from "./WeatherCard/WeatherCard";
import styles from "./WeatherDisplay.module.css";

export const WeatherDisplay = () => {

    const {data, error} = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    const currentDay = data?.current;

    const [currentDayInput, nextDay, theDayAfterNext] = data?.forecast?.forecastday || [];

    console.log(currentDay);

    const condition = data?.current.condition.text.toLowerCase();
    const isDay = data?.current.is_day;

    useEffect(() => {

        if (condition) {

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

            dispatch({type: 'COLOR_CHANGE', payload: matchedCondition});
        }

    }, [condition, isDay]);

    if (error) {
        return (
            <>
                {toast.error("There were issues with the Weather API")}
            </>
        );
    }
    const thunderWeather = (condition) => {

        if (condition.includes("thunder")) {
            return (
                <FontAwesomeIcon icon={faCloudBolt} shake size="2xl"/>
            )
        }

    }

    const weatherCondition = (condition) => {

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
        } else if (isDay === 0) {
            return (
                <FontAwesomeIcon icon={faMoon} flip size="2xl"/>
            )
        } else {
            return (
                <FontAwesomeIcon icon={faSun} beat size="2xl"/>
            )
        }
    }

    return (
        <>
            {data && (
                <section className={styles.weather}>
                    <h2>{data?.location.name}</h2>
                    <article className={styles.weather__cards}>
                        <article className={styles.weather__cards_currentDay}>
                            <WeatherCard data={data} thunderWeather={thunderWeather}
                                         weatherCondition={weatherCondition} condition={data?.current.condition.text.toLowerCase()}/>
                        </article>
                        <article className={styles.weather__cards_nextDays}>
                            <WeatherCard data={data} thunderWeather={thunderWeather}
                                         weatherCondition={weatherCondition}/>
                        </article>
                        <article className={styles.weather__cards_nextDays}>
                            <WeatherCard data={data} thunderWeather={thunderWeather}
                                         weatherCondition={weatherCondition}/>
                        </article>
                    </article>
                </section>)}
        </>
    );

}