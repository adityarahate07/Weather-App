const apiKey = "02cfa01df1a15b291c1d94ff139b5cc6"; // Replace with your API key

async function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    document.getElementById("city-name").innerText = data.name;
    document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("desc").innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;

  } catch (error) {
    alert("Error fetching data");
  }
}