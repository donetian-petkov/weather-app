import styles from './CurrentWeatherCard.module.css'
import React from "react";

export const CurrentWeatherCard = ({data , thunderWeather, weatherCondition} ) => {

    return (
            <div className={styles.currentDay__card}>
                <h2>{data?.location.name}</h2>
                <div className={styles.currentDay__card__icon}>
                    {thunderWeather(data?.current.condition.text.toLowerCase())}
                    {weatherCondition(data?.current.condition.text.toLowerCase(),data?.current.is_day)}
                    <h2>{data.current.temp_c}°C</h2>
                </div>
                <h3>Today</h3>
                <h3>Date: {data.location.localtime.split(" ")[0]}</h3>
                <p>Current Time: {data.location.localtime.split(" ")[1]}</p>
                <p>Condition: {data.current.condition.text}</p>
                <p>Humidity: {data.current.humidity}%</p>
                <p>Daily Max Temperature: {data.forecast.forecastday[0].day.maxtemp_c}°C</p>
                <p>Daily Min Temperature: {data.forecast.forecastday[0].day.mintemp_c}°C</p>
            </div>
    );

}