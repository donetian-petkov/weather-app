const api_key=process.env.REACT_APP_API_KEY;

const fetchCity = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`);
    return await response.json();
}

export default fetchCity;