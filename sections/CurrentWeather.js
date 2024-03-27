// declaram functia care imi va afisa vremea curenta - apelul ei se face in index.js
function displayCurrentWeather(cityName) {
    //ne luam link ul catre care trebuie sa facem requestul
    const currentWeatherEndpoint = getCurrentWeatherEndpoint(cityName);

    //facem requestul catre server
    fetch(currentWeatherEndpoint)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //extragem proprietatile de care avem nevoie din raspuns
            const { name, dt, main, weather, wind } = data;

            //o sa luam ziua din saptamana - pentru asta, ne folosim de proprietatea, constanta dt. trebuie sa il procesam, o sa ne creem un util de date
            const day = getDayOfTheWeek(dt);

            //o sa luam ora tot din proprietatea dt
            const hours = getHour(dt);
            
            //extragem temperatura din obiect
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
            const description = weather[0].description;

            //ne extragem iconita corespunzatoare vremii
            const weatherIcon = getWeatherIcon(weather[0].icon);

            //calculam viteza vantului
            const windSpeedInKm = Math.round(windToKmPerHour(wind.speed));

            console.log(name, day, hours, temperature, realFeel, description, weatherIcon, windSpeedInKm)

            const descriptionElement = document.querySelector(".current-weather");
            descriptionElement.innerHTML = `
                <div class="px-3">
                    <div class="fs-2 mb-2"> <strong> ${name} </strong> </div>
                    <div class="f2-4"> <strong> ${day} </strong>, ${hours} </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <strong class="fs-1"> ${temperature}°C </strong>
                        <img src="${weatherIcon}"/>
                        
                    </div>
                </div>

                <div class="px-3"> 
                    <p class="fs-5"> Real feel: <strong> ${realFeel}°C </strong> </p>

                    <p class="fs-5">${description} </p>
                    <p class="fs-5"> Vant: <strong> ${windSpeedInKm} km/h </strong>
                
                </div>
            `;
    });
}