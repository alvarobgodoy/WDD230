let temperature = document.getElementById('temperature').textContent;
let windSpeed = document.getElementById('wind-speed').textContent;
let windChill = 'N/A';

if (temperature <= 50 && windSpeed > 3) {
    windChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (windSpeed**0.16)) + (0.4275 * temperature * (windSpeed**0.16)));
}

document.getElementById('wind-chill').textContent = windChill;