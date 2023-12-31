import styles from "./NextWeatherCard.module.css";
import {motion} from "framer-motion";

export const NextDayWeatherCard = ({location, data , thunderWeather, weatherCondition}) => {

    return (
        <motion.div
            className={styles.nextDay__card}
            key={location}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}>
            <div className={styles.nextDay__card__icon}>
                {thunderWeather(data.day.condition.text.toLowerCase())}
                {weatherCondition(data.day.condition.text.toLowerCase())}
                <h2>{data.day.avgtemp_c}°C</h2>
            </div>
            <h3>Date: {data.date}</h3>
            <p>Max Temperature: {data.day.maxtemp_c}°C</p>
            <p>Min Temperature: {data.day.mintemp_c}°C</p>
            <p>Humidity: {data.day.avghumidity}%</p>
            <p>Condition: {data.day.condition.text}</p>
        </motion.div>
    )

}