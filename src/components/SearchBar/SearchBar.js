import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from "../../utils/weatherService";
import {fetchPlace} from "../../utils/cityPickerService";
import styles from './Searchbar.module.css'
import toast from "react-hot-toast";


const SearchBar = () => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    const fetchWeather = async (city) => {
        try {
            const data = await fetchCurrentWeather(city,3);
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
            toast.error("Could have not fetched the city API.")

        }
    }

    const handleChange = async (e) => {

        const value = e.target.value;

        setInput(value);

        const cities = await fetchCities(value);

       try {
           await setSuggestions(cities.map(city => city.place_name));
       } catch {
           toast.error("Could not fetch the city API.")
       }
    };

    return (

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
