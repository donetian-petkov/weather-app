import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from "../utils/weatherService";
import {fetchPlace} from "../utils/cityPickerService";
import styles from './Searchbar.module.css'


const SearchBar = () => {
/*
    const [city, setCity] = useState('');
*/
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    const fetchWeather = async (city) => {
        try {
            const data = await fetchCurrentWeather(city);
            await setSuggestions(data);
            dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_WEATHER_ERROR', payload: error });
        }
    };

    const fetchCities = async (text) => {
        try {
            const result = await fetchPlace(text);
            return result.features;

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = async (e) => {

        const value = e.target.value;

        setInput(value);

        const cities = await fetchCities(value);

        await setSuggestions(cities.map(city => city.text));
    };

    return (
        /*<form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="submit">Search</button>
        </form>*/

        <div className={styles.search}>
            <input
                type="text"
                placeholder="Enter a city..."
                value={input}
                onChange={handleChange}
            />
            {suggestions.length > 0 && (
                <ul className={styles.search__suggestions}>
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => fetchWeather(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
