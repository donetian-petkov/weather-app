const api_key=process.env.REACT_APP_API_KEY;

export const fetchCurrentWeather = async (city, days = 1) => {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=${days}`);
    return await response.json();
}


