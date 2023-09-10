import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from "../utils/weatherService";
import {fetchPlace} from "../utils/cityPickerService";

const SearchBar = () => {
    const [city, setCity] = useState('');
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    const fetchWeather = async () => {
        try {
            const data = await fetchCurrentWeather(city);
            await setSuggestions(data);
            dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_WEATHER_ERROR', payload: error });
        }
    };

    const fetchCity = async (text) => {
        try {
            const result = await fetchPlace(text);
            console.log(result.features);
            return result.features;

        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    const handleChange = async (e) => {
        const value = e.target.value;

        setInput(value);

        const cities = await fetchCity(value);

        console.log(cities.map(city => console.log(city.text)));

        await setSuggestions(cities.map(city => city.text));
    };

    return (
        /*<form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="submit">Search</button>
        </form>*/

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a city..."
                value={input}
                onChange={handleChange}
            />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => setCity(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
