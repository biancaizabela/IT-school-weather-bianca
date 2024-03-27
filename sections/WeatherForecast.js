//declar functia care imi va afisa vremea pe urmatoarele 5 zile iar apelul functiei se va face din index.js
function displayWeatherForecast(city) {
    //prima data ne generam link ul APIului
    const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);

    //imi selectez el cu clasa .weather-forecast deoarece aiciam sa interez html ul generat in pasul cu fetch
    const weatherForecastContainer = document.querySelector(".weather-forecast");

    //inainte de a face callul catre server (adica inainte de fetch) am sa golesc containerul 
    weatherForecastContainer.innerHTML=" ";

//facem requestul catre api
    fetch(forecastWeatherEndpoint)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //ne folosim de object destructuring pt a accesa doar proprietatea list din obiectul data
            const { list } = data;

        //ne declaram un obiect gol in care o sa tinem predictiile pe zile (L M M J V S D)
        const daysMap = {};

        //iteram prin cele 40 de predictii primite de la server = adica prin fiecare element al array ului list
            list.forEach((element) => {
                //extragem proprietatea dt din fiecare element al array ului
                 const { dt } = element;
                    const day = getDayOfTheWeek(dt);

                //daca avem deja ziua saptamanaii in obiectul daysMap, ii adaugam o oua predictie

                if (daysMap[day]) {
                    daysMap[day].push(element);

                //altfel, daca nu avem ziua saptamanii in obiectul daysMap, o sa adaugam ziua respectiva impreuna cu elementul sau pedictia
                    } else {
                        daysMap[day] = [element];
                    }
            })
            console.log(daysMap);

            //iteram prin obiectul daysMap care are deja datele grupate pe zile, folosind instructiunea for...in - adica fiecare cheie din obiect repr o zi a saptamanii

            for(dayKey in daysMap) {
                //inserez in HTML ziua din obiectul daysMap
                weatherForecastContainer.innerHTML += `<h3 class="text-primary"> ${dayKey} </h3>`;
                //imi extrag elementul curent din obiectul daysMap
                //console.log(dayKey)
                let weatherByDays = daysMap[dayKey];

                weatherByDays.forEach((element) => {
                    //pentru fiecare element sau predictie, pot sa ma apuc sa extrag datele de interes - destructuring

                    const {dt, main, weather} = element;

                    //procesez ora
                    const hour = getHour(dt);

                    //rotunjim temperatura
                    const temperature = Math.round(main.temp);

                    //rotunjim realfeel
                    const realfeel = Math.round(main.feels_like);

                    //atentie la descriere deoarece weather este un array cu un singur element si accesam mereu elementul 0
                    const description = weather[0].description;

                    //iconita
                    const weatherIcon = getWeatherIcon(weather[0].icon)

                    //inseram in HTML toate datele de mai sus
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border rounded mb-3">
                            <div> ${hour} </div>
                            <div> <img src="${weatherIcon}" /> </div>
                            <div class="fs-3"> <strong> ${temperature}°C </strong> </div>
                            <div> ${description} </div>
                            <div class="real-feel"> Real feel: <strong> ${realfeel}°C </strong> </div>

                        </div>

                    `;
                })
            }
        })
}