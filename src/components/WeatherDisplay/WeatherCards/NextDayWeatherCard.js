import styles from "./WeatherCard.module.css";

export const NextDayWeatherCard = ({data , thunderWeather, weatherCondition}) => {

    return (
        <div className={styles.weather__condition}>
            <div className={styles.weather__condition__icon}>
                <h2>{data.day.avgtemp_c}°C</h2>
                {thunderWeather(data.day.condition.text.toLowerCase())}
                {weatherCondition(data.day.condition.text.toLowerCase())}
            </div>
            <p>Date: {data.date}</p>
            <p>Max Temperature: {data.day.maxtemp_c}°C</p>
            <p>Min Temperature: {data.day.mintemp_c}°C</p>
            <p>Humidity: {data.day.avghumidity}%</p>
            <p>Condition: {data.day.condition.text}</p>
        </div>
    )

}