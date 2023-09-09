import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
    </div>
);

export default App;
