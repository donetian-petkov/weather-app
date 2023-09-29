import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import {WeatherCard} from "./components/WeatherCard";
import {Toaster} from "react-hot-toast";
import {useSelector} from "react-redux";

const App = () => {

    const data = useSelector((state) => state.colour);

    return (

    <div className={`${data} app`}>
        <div><Toaster/></div>
        <h1>Weather App</h1>
        <SearchBar/>
        <WeatherCard/>
    </div>
)};

export default App;
