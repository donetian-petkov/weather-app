import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import {WeatherCard} from "./components/WeatherCard";

const App = () => (
    <div className="app">
        <h1>Weather App</h1>
        <SearchBar/>
        <WeatherCard/>
    </div>
);

export default App;
