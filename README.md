# Weather App 

A website, which uses a weather API to get the current weather conditions in a particular place or a city and a forecast for the next two days. 

It uses Redux for the state management of the results from the said API and the weather condition.

Based on the condition the background color is changed. Also, I have accounted if the weather is clear and if it is night.

I am using the MapBox API to provide a dropdown list of city suggestions based on what the user is typing in the search box on the site. 

Finally, there is a Toast notifications in case the site can not connect to either API's or the city can not be found.

## Installation

1. In the project directory run: npm install

2. In the same directory create an .env file, where please set two api keys - the first one for the weatherapi.com and the second one for mapbox.com:

REACT_APP_API_KEY=*******

REACT_APP_MAP_API_KEY=*******

3. In the project directory run: npm start

## Live Preview: 

https://weatherapp.donetianpetkov.com/
