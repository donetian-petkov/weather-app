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

## Usage: 

Enter the city for which you want to know its weather in the search field. You may either hit Enter if you have are certain about the name of the city or choose the city from the dropdown menu. You will receive the information for the current weather in the city and the forecast for the next two days. If the city is not found you will receive a prompt. 

## Live Preview: 

https://weatherapp.donetianpetkov.com/
