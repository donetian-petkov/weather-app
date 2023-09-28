import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import {WeatherCard} from "./components/WeatherCard";
import {Toaster} from "react-hot-toast";

const App = () => (
    <div className="app">
        <div><Toaster/></div>
        <h1>Weather App</h1>
        <SearchBar/>
        <WeatherCard/>
    </div>
);

export default App;
