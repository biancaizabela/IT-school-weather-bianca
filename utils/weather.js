//imi definesc o functie care sa imi returneze iconita de la open weather pe baza codului primit de la API

function getWeatherIcon (iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`
}

//primim viteza vantului in m/s si vrem sa convertim in km/h
function windToKmPerHour(meterPerSec){
    return((meterPerSec * 2600) / 1000);
}
