//aici o sa avem logica pt a ne extrage intr-un mod citibil data curenta primita de la API (proprietatea dt de pe obiectul de la Open Weather API)

function getDayOfTheWeek(dateInUtc) {
    //pentru ca data de la API este in UTC format, trebuie sa o transform folosing obiectul Date din JS
    const date = new Date(dateInUtc * 1000);
    const dayIndex = date.getDay();
    console.log(dayIndex);

    switch (dayIndex) {
        case 0:
            day = "Duminica";
            break;

        case 1:
            day = "Luni";
            break;

        case 2:
            day = "Marti";
            break;

        case 3:
            day = "Miercuri";
            break;

        case 4:
            day = "Joi";
            break;

        case 5:
            day = "Vineri";
            break;

        case 6:
            day = "Sambata";
            break;
        
        default:
            //aruncam o eroare daca indexul nu este valid (teoretic nu ar trebui sa ajunga aici)
            throw new Error("Invalid day index");
    }
    return day;
}

function getHour(dateInUtc) {
    const date = new Date(dateInUtc * 1000);
    //EXTRAGEM ora folosind metoda getHours() a obiectului Date
    
    //daca ora este mai mica de 10, o sa ii adaugam noi un0 in fata

    let hours = date.getHours();
        if (hours< 10) {
        hours = `0${hours}`;
}
    //extragem minutele folosind o metoda de pe obiectul date = getminutes()
    let minutes = date.getMinutes();
    if (minutes <10) {
        minutes = `0${minutes}`;
    }

    //returnam ora sub formatul dorit
    return `${hours}:${minutes}`;
}