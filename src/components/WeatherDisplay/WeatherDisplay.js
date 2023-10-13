import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const { data, error } = useSelector((state) => state.weather);

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data && (
                <>
                    <h2>{data.location.name}</h2>
                    <p>Temperature: {data.current.temp_c}°C</p>
                    <p>Humidity: {data.current.humidity}%</p>
                </>
            )}
        </div>
    );
};

export default WeatherDisplay;
