const bucharestButton = document.querySelector(".dropdown-menu li .bucharest");

const timisoaraButton = document.querySelector(".dropdown-menu li .timisoara");

const oradeaButton = document.querySelector(".dropdown-menu li .oradea");

const aradButton = document.querySelector(".dropdown-menu li .arad");

const sibiuButton = document.querySelector(".dropdown-menu li .sibiu");

//declaram o functie care sa ne schimbe orasul curent
function updateCurrentCity(city) {
    //mai intai trebuie sa selectez elementul care imi tine orasul curent
    const currentCityElem = document.querySelector(".current-city");
    currentCityElem.innerHTML = city;

}


//adaugam event listeneri pe fiecare element in parte - adica pe fiecare buton din drop-down

bucharestButton.addEventListener("click", function (){
    //la click pe butonul Bucuresti, ar trebui sa schimb numele orasului
    //si al 2 lea lucru: sa fac update la vreme
    updateWeather("București");
});

oradeaButton.addEventListener("click", function (){
    updateWeather("Oradea");
});

timisoaraButton.addEventListener("click", function (){
    updateWeather("Timișoara");
});

aradButton.addEventListener("click", function (){
    updateWeather("Arad");
});

sibiuButton.addEventListener("click", function (){
    updateWeather("Sibiu");
});


//declaram o functie care ne va schimba orasul si ne face update la vreme
function updateWeather(city) {
    //actualizam orasul selectat din dropdown in localStorage
    localStorage.setItem("city", city);
    //primul apel a fost catre bucuresti - deci valoarea parametrului city este Bucuresti -> city = bucuresti
    
    //reafisam vremea curenta in functie de orasul selectat
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    //actualizam orasul afisat pe ecran
    //apelez functia updateCurrentCity
    updateCurrentCity(city);
}