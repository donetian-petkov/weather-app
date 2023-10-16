import styles from './WeatherCard.module.css'

export const CurrentWeatherCard = ({data , thunderWeather, weatherCondition} ) => {

    return (
            <div className={styles.weather__condition}>
                <div className={styles.weather__condition__icon}>
                    <h2>{data.current.temp_c}°C</h2>
                    {thunderWeather(data?.current.condition.text.toLowerCase())}
                    {weatherCondition(data?.current.condition.text.toLowerCase())}
                </div>
                <p>Date: {data.location.localtime.split(" ")[0]}</p>
                <p>Current Time: {data.location.localtime.split(" ")[1]}</p>
                <p>Condition: {data.current.condition.text}</p>
                <p>Humidity: {data.current.humidity}%</p>
                <p>Daily Max Temperature: {data.forecast.forecastday[0].day.maxtemp_c}°C</p>
                <p>Daily Min Temperature: {data.forecast.forecastday[0].day.mintemp_c}°C</p>
            </div>
    );

}