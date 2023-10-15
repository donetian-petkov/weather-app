import styles from './WeatherCard.module.css'

export const WeatherCard = ( {data , thunderWeather, weatherCondition} ) => {

    return (
            <div className={styles.weather__condition}>
                <div className={styles.weather__condition__icon}>
                    <h2>{data.current.temp_c}°C</h2>
                    {thunderWeather()}
                    {weatherCondition()}
                </div>
                <p>Current Time: {data.location.localtime}</p>
                <p>Max Temperature: {data.current.condition.maxtemp_c}°C</p>
                <p>Min Temperature: {data.current.condition.mintemp_c}°C</p>
                <p>Humidity: {data.current.humidity}%</p>
                <p>Condition: {data.current.condition.text}</p>
            </div>
    );

}