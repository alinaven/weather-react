import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      felttemp: response.data.sys.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

  function search() {
    let apiKey = "5d746e8f46d35c046956d77d0f16774f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="background-box shadow p-3 m-5 rounded">
          <div className="row m-2">
            <div className="search-bar">
              <form id="search-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    id="city-input"
                    placeholder="Enter city"
                    autoFocus="on"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">
                      🔎 Search
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      id="position-button"
                    >
                      📍 Current
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <Weatherinfo data={weatherData} />

          <footer id="Github-link">
            <a href="https://github.com/alinaven/my-weather-app">
              👩🏼‍💻 Open-source code{" "}
            </a>
            by Alina Vennes
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
