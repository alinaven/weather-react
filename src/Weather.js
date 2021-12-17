import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    country: "US",
    temp: "13",
    time: "Mon 13:23h",
    sunrise: " 08:00",
    sunset: " 16.45",
    humidity: " 30",
    wind: " 4",
    iconURL:
      "https://st2.depositphotos.com/8511412/11363/v/950/depositphotos_113639238-stock-illustration-sun-icon-sun-icon-eps10.jpg",
    description: "Light clouds",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="background-box shadow p-3 m-5 rounded">
          <div className="row p-3">
            <div className="col-sm-6 location-info">
              <div className="row mt-2">
                <div className="col-sm-12 current-city">
                  <span id="city">{weatherData.city}, </span>
                  <span id="country">{weatherData.country}</span>
                  <p>
                    <span className="last-update">
                      Last updated:{" "}
                      <span id="last-update">{weatherData.time}</span>
                    </span>
                  </p>
                </div>

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
                          <button
                            className="btn btn-outline-secondary"
                            type="submit"
                          >
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
                <div className="row m-1 mt-2">
                  <div className="col-12 suntime">
                    Sunrise: <span id="sunrise">{weatherData.sunrise}</span>h |
                    Sunset:
                    <span id="sunset">{weatherData.sunset}</span>h
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 weather-info">
              <div className="row m-4">
                <div className="col-sm-8 current-weather">
                  <h2>Current weather</h2>
                  <p id="temperature"></p>
                  <span className="unit">{weatherData.temp}°C</span>
                  <br />
                  <span id="description">{weatherData.description}</span>
                </div>
                <div className="col-sm-4">
                  <img
                    src={weatherData.iconURL}
                    id="main-icon"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="row m-4">
                <div className="col-sm-12 info-description">
                  <ul>
                    <li>
                      Temperature feels like
                      <span className="info-value">
                        <span id="felt-temperature"></span>°C
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
                        <span id="wind">{weatherData.wind}</span> km/h
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
    </div>
  );
}
