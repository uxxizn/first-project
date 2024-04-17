const apiKey = 'YOUR_API_KEY';
const city = 'Seoul'; // Change to the city you want to display weather for

window.addEventListener('load', () => {
    getCurrentWeather();
    getWeatherForecast();
});

async function getCurrentWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayCurrentWeather(data);
}

function displayCurrentWeather(data) {
    document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather-icon">`;
    document.getElementById('temperature').textContent = `${data.main.temp.toFixed(1)}°C`;
    document.getElementById('weather-description').textContent = data.weather[0].description;
}

async function getWeatherForecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeatherForecast(data);
}

function displayWeatherForecast(data) {
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = '';
    for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temperature = forecast.main.temp.toFixed(1);
        const description = forecast.weather[0].description;
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${dayOfWeek}</strong> - ${temperature}°C, ${description}`;
        forecastList.appendChild(listItem);
    }
}
