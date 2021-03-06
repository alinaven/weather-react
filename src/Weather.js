import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import MusicPlayer from "./MusicPlayer";

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
      felttemp: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
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

  function fetchPosition(position) {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  function retrievePosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "5d746e8f46d35c046956d77d0f16774f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather center-block">
        <div className="background-box p-2 pt-4 pb-4">
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
                      ???? Search
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      id="position-button"
                      onClick={fetchPosition}
                    >
                      ???? Current
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Weatherinfo data={weatherData} />
          <div>
            <hr />
          </div>
          <WeatherForecast data={weatherData} />
          <div>
            <hr />
          </div>
          <div class="music-player">
            <MusicPlayer code={weatherData.icon} />
          </div>
          <div>
            <hr />
          </div>
          <footer id="Github-link">
            <a
              href="https://github.com/alinaven/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              ??????????????? Open-source code
            </a>{" "}
            by Alina Vennes
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
