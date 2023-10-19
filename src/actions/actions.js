import {CLEAR_WEATHER_ERROR, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS} from "./actionTypes";

export const fetchWeatherSuccess = data => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
});

export const fetchWeatherError = error => ({
    type: FETCH_WEATHER_ERROR,
    payload: {
        message: error.message,
        name: error.name,
        stack: error.stack,
    },
});

export const clearWeatherError = () => ({
    type: CLEAR_WEATHER_ERROR,
});
