const API_KEY = "bc8bfa54438f80fc6ad4d70b7f62de42";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("I live in : " + lat + " & " + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerHTML = data.name;
            weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    })
}

function onGeoError() {
    alert("Can't find you, No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


































































































