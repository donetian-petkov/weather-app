const map_api_key=process.env.REACT_APP_MAP_API_KEY;

export const fetchPlace = async (text) => {

const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${map_api_key}&autocomplete=true&types=place`
);
return response.json();

}