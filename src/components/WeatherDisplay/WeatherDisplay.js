import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {CurrentWeatherCard} from "./WeatherCards/CurrentWeatherCard";
import styles from "./WeatherDisplay.module.css";
import {matchCondition, thunderWeather, weatherCondition} from "../../utils/weatherHelperFunctions";
import {NextDayWeatherCard} from "./WeatherCards/NextDayWeatherCard";

export const WeatherDisplay = () => {

    const {data, error} = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    const condition = data?.current?.condition?.text?.toLowerCase();
    const isDay = data?.current?.is_day;
    const [currentDay, nextDay, theDayAfterNext] = data?.forecast?.forecastday || [];

    useEffect(() => {

        if (condition) {

            dispatch({type: 'COLOR_CHANGE', payload: matchCondition(condition,isDay)});
        }

    }, [condition, isDay]);

    if (error) {

        return (
            <>
                {toast.error("There were issues with the Weather API")}
            </>
        );
    }

    return (
        <>
            {data && (
                    <section className={styles.weather__cards}>
                        <article className={styles.weather__cards__nextDay}>
                            <NextDayWeatherCard location={data.location.name} data={nextDay} thunderWeather={thunderWeather}
                                                weatherCondition={weatherCondition}/>
                        </article>
                        <article className={styles.weather__cards__currentDay}>
                            <CurrentWeatherCard data={data} thunderWeather={thunderWeather}
                                                weatherCondition={weatherCondition} />
                        </article>
                        <article className={styles.weather__cards__dayAfterNext}>
                            <NextDayWeatherCard location={data.location.name} data={theDayAfterNext} thunderWeather={thunderWeather}
                                                weatherCondition={weatherCondition}/>
                        </article>
                    </section>
              )}
        </>
    );

}