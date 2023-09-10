import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faSmog, faCloudRain, faSnowflake, faCloudBolt, faCloud} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import styles from './WeatherCard.module.css'

export const WeatherCard = () => {

    const {data, error} = useSelector((state) => state.weather);


    if (error) return <p>Error: {error.message}</p>;

    const thunderWeather = () => {

        const condition = data.current.condition.text.toLowerCase();

        if (condition.includes("thunder")) {

            return (
                <FontAwesomeIcon icon={faCloudBolt} shake size="2xl" />
            )

        }

    }

    const weatherCondition = () => {

        const condition = data.current.condition.text.toLowerCase();

        if (condition.includes("rain") || condition.includes("drizzle")) {

            return (

                <FontAwesomeIcon icon={faCloudRain} bounce size="2xl"/>
            )

        } else if (condition.includes("snow")
            || condition.includes("sleet")
            || condition.includes("ice")
            || condition.includes("blizzard")) {

            return (

                <FontAwesomeIcon icon={faSnowflake} spin size="2xl"/>
            )

        } else if (condition.includes("mist") || condition.includes("fog")) {

            return (

                <FontAwesomeIcon icon={faSmog} fade size="2xl"/>
            )

        } else if (condition.includes("cloudy")) {

            return (

                <FontAwesomeIcon icon={faCloud} fade size="2xl"/>
            )

        } else {
            return (
                <FontAwesomeIcon icon={faSun} beat size="2xl"/>
            )
        }

    }

    return (
        <div>
            {data && (
                <div className={styles.weather}>
                    <div className={styles.weather__city}>
                        <h2>{data.location.name}</h2>
                    </div>
                    <div className={styles.weather__condition}>
                        <div className={styles.weather__condition__icon}>
                            {thunderWeather()} {weatherCondition()}
                        </div>
                        <p>Current Time: {data.location.localtime}</p>
                        <p>Temperature: {data.current.temp_c}°C</p>
                        <p>Humidity: {data.current.humidity}%</p>
                        <p>Condition: {data.current.condition.text}</p>
                    </div>
                </div>
            )}
        </div>
    );

}