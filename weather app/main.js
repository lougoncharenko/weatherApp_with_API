
// Dom Elements
const cityName = document.querySelector(".city");
const weatherCondition = document.querySelector(".weatherCondition");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");
const max = document.querySelector(".tempMax");
const humidity = document.querySelector(".humidty")
const deg = document.querySelector(".deg");
const input = document.querySelector('input');
const submit = document.querySelector(".add");


async function fetchWeather(location){
    let unit = "imperial"
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units='+ unit + '&appid=17e839bf7c9e67959dd1caff492f7051')
    const data = await response.json();
    const place = data.name;
    const temperature = data.main.temp;
    const feels = data.main.feels_like;
    const desc = data.weather[0].description;
    const humid = data.main.humidity
    const maxTemp = data.main.temp_max;
    displayWeather(place,temperature, feels, desc, humid, maxTemp);

}

fetchWeather("Sarasota");

function displayWeather(place,temperature, feels, desc, humid, maxTemp) {
    cityName.textContent = place;
    temp.textContent = Math.round(temperature);
    feelsLike.textContent = "Feels like: " + Math.round(feels) + "°";
    weatherCondition.textContent = desc;
    humidity.textContent = "Humidty: " + humid + "%";
    max.textContent = "Today's high: " + Math.round(maxTemp) + "°";
}

// Event Listeners
submit.addEventListener("click", () => {
    fetchWeather(input.value)
  });
  
  input.addEventListener("keyup", (e) => {
      e.preventDefault();
      submit.click();
  });
  
  input.addEventListener("click", () => {
    input.value = ""
  });