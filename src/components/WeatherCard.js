import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import styles from './WeatherCard.module.css'
export const WeatherCard = () => {

    const { data, error } = useSelector((state) => state.weather);

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data && (
                <div className={styles.weather}>
                    <div className={styles.city}>
                    <h2>{data.location.name}</h2>
                    </div>
                    <div className={styles.conditions}>
                    <p>Temperature: {data.current.temp_c}°C</p>
                    <p>Humidity: {data.current.humidity}%</p>
                    <FontAwesomeIcon icon={faSun} beat size="2xl" />
                    </div>
                </div>
            )}
        </div>
    );

}