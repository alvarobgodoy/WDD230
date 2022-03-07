// Weather API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Corrientes&units=imperial&appid=1384e4ca3e82ee8fd20b1bc49b14a713';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)

    // Get and embed the current temperature
    let currentTemp = jsObject.main.temp;
    document.getElementById('current-temp').textContent = currentTemp;

    // Get and embed the current temperature
    let windSpeed = jsObject.wind.speed;
    document.getElementById('wind-speed').textContent = windSpeed;

    // Get and embed the icon
    let icon = jsObject.weather[0].icon
    const iconsrc= `https://openweathermap.org/img/w/${icon}.png`;
    const desc = jsObject.weather[0].description;

    // Set the src and alt of the image
    document.getElementById('weather-icon').setAttribute('src', iconsrc);
    document.getElementById('weather-icon').setAttribute('alt', desc);

    // Set the current condition
    document.getElementById('current-condition').textContent = desc;

    // Windchill
    let temperature = document.getElementById('current-temp').textContent;
    let windChill = 'N/A';

    if (temperature <= 50 && windSpeed > 3) {
        windChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (windSpeed**0.16)) + (0.4275 * temperature * (windSpeed**0.16)));
        windChill = `${windChill}°F`;
    }

    document.getElementById('wind-chill').textContent = windChill;
  });