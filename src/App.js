import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import {Toaster} from "react-hot-toast";
import {useSelector} from "react-redux";
import {WeatherDisplay} from "./components/WeatherDisplay/WeatherDisplay";

const App = () => {

    const data = useSelector((state) => state.colour);

    return (

    <div className={`${data} app`}>
        <div><Toaster/></div>
        <h1>Weather App</h1>
        <SearchBar/>
        <WeatherDisplay/>
    </div>
)};

export default App;
