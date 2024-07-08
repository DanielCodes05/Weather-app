function getWeather() {
    const apiKey = 'a5bcf04a9ef141f221bac65529b28e36';   //Remember to generate your own api key from any website
    const city = documnet.getElementById('city').value;

    if (!city) {
        alert('Please enter a city!');
        return;
    }

    const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
}

function getWeather() {
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error Fetching Current Weather Data:', error);
            alert('Error Fetching Current Weather data. Please try again.');
        });
}

function getWeather() {
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data);
        })
        .catch(error => {
            console.error('Error Fetching Hourly Forecast Data:', error);
            alert('Error Fetching Hourly Forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = documnet.getElementById('hourly-forecast');

    //Clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTMl = '';
    tempDivInfo.innerHTML = '';
}

function displayWeather(data) {
    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`
    } else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15)
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
            <p>${temperature}°C</p>
        `;

        const weatherHTML = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTMl = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(data) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.foreach(item => {

        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}
