//API key urile in general nu ar fi bine sa fie stocate aici

const API_KEY = "413439a7bfb645c9091709f6ed447d90";

//construim link urile (end point urile) catre care noi o sa facem requesturi cu JS

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
};

//declaram a doua functie pe care o vom folosit pt a lua
function getForecastWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
};