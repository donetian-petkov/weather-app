import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from "../../utils/weatherService";
import {fetchPlace} from "../../utils/cityPickerService";
import styles from './Searchbar.module.css'
import toast from "react-hot-toast";


const SearchBar = () => {
    // the state of the value for the input field
    const [input, setInput] = useState('');

    // the state for the suggestions displayed when you start typing
    const [suggestions, setSuggestions] = useState([]);

    // the dispatch function to dispatch actions to the store
    const dispatch = useDispatch();

    const fetchWeather = async (city) => {
        try {
            const data = await fetchCurrentWeather(city,3);

            if (data?.location?.name !== undefined) {
                await setSuggestions(data);
                dispatch({type: 'FETCH_WEATHER_SUCCESS', payload: data});
                setInput('');
            } else {
                toast.error("Could not find a city with that name.")
            }

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

       try {
           const cities = await fetchCities(value);

           await setSuggestions(cities.map(city => city.place_name));
       } catch {
           toast.error("Could not fetch the city API.")
       }
    };

    const handleKeyPress = async (event) => {

        if (event.key === 'Enter') {

            await fetchWeather(input);

            event.preventDefault();  // Prevents the default behavior of submitting the form
        }
    };


    return (

        <div className={styles.search}>
            <input
                type="text"
                placeholder="Enter a city..."
                value={input}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
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
