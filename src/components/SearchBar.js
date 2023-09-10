import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchCity from "../utils/weatherService";

const SearchBar = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const fetchWeather = async () => {
        try {
            const data = fetchCity(city);
            dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_WEATHER_ERROR', payload: error });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
