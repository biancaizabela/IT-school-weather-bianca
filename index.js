//luam valoarea cheii city din localStorage
let currentCityFromLS = localStorage.getItem("city"); 

//pasul urmator este sa actualizam orasul afisat pe ecran daca avem cheia city in localStorage
const currentCityTag = document.querySelector(".current-city");
if (currentCityFromLS) {
    currentCityTag.innerHTML = currentCityFromLS;
}

//daca nu avem cheia city in local storage, atunci setam ca valoare default - bucuresti, atat pt local storage cat si 
if(!currentCityFromLS) {
    localStorage.setItem("city", "București");
    currentCityfromLS="București";
}

//afisam vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLS);

//afisam pe 5 zile
displayWeatherForecast(currentCityFromLS);