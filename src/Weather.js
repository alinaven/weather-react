import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
      iconURL:
        "https://st2.depositphotos.com/8511412/11363/v/950/depositphotos_113639238-stock-illustration-sun-icon-sun-icon-eps10.jpg",
      date: new Date(response.data.dt * 1000),
      sunrise: "08:00",
      sunset: "16:45",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="background-box shadow p-3 m-5 rounded">
          <div className="row m-2">
            <div className="search-bar">
              <form id="search-form">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    id="city-input"
                    placeholder="Enter city"
                    autoFocus="on"
                    autoComplete="off"
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

          <div className="row p-3">
            <div className="col-sm-6 location-info">
              <div className="row mt-0">
                <div className="col-sm-12 current-city">
                  <span id="city">{weatherData.city}, </span>
                  <span id="country">{weatherData.country}</span>
                  <p>
                    <span className="last-update">
                      Last updated:{" "}
                      <span id="last-update">
                        <FormattedDate date={weatherData.date} />
                      </span>
                    </span>
                  </p>
                </div>

                <div className="row m-0 p-0">
                  <div className="col-12 suntime">
                    Sunrise: <span id="sunrise">{weatherData.sunrise}</span>h |
                    Sunset:
                    <span id="sunset">{weatherData.sunset}</span>h
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 weather-info">
              <div className="row m-0 mt-0">
                <div className="col-sm-8 current-weather">
                  <p id="temperature">{weatherData.temperature}</p>
                  <span className="unit">°C</span>
                  <br />
                  <span id="description" className="text-capitalize">
                    {weatherData.description}
                  </span>
                </div>
                <div className="col-sm-4 mt-4 px-0">
                  <img
                    src={weatherData.iconURL}
                    id="main-icon"
                    className="img-fluid main-icon"
                    alt={weatherData.description}
                  />
                </div>
              </div>

              <div className="row m-0 mt-4">
                <div className="col-sm-12 info-description">
                  <ul>
                    <li>
                      Temperature feels like
                      <span className="info-value">
                        <span id="felt-temperature">
                          {" "}
                          {weatherData.felttemp}
                        </span>
                        °C
                      </span>
                    </li>
                    <li>
                      Humidity:
                      <span className="info-value">
                        <span id="humidity">{weatherData.humidity}</span>%
                      </span>
                    </li>
                    <li>
                      Windspeed:
                      <span className="info-value">
                        <span id="wind">{weatherData.wind}</span> m/s
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr />
          </div>
          <div className="weather-forecast" id="forecast"></div>
          <div>
            <hr />
          </div>
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
    let apiKey = "5d746e8f46d35c046956d77d0f16774f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
