const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=1384e4ca3e82ee8fd20b1bc49b14a713';
let weatherData;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject)
      let currentTemp = jsObject.main.temp;
      document.getElementById('current-temp').textContent = currentTemp;

      let icon = jsObject.weather[0].icon
      const iconsrc= `https://openweathermap.org/img/w/${icon}.png`;
      const desc = jsObject.weather[0].description;

      document.getElementById('icon-src').textContent = iconsrc;
      document.getElementById('weathericon').setAttribute('src', iconsrc);
      document.getElementById('weathericon').setAttribute('alt', desc);
      document.querySelector('figcaption').textContent = desc;
  });