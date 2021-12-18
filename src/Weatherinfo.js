import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  <div className="WeatherInfo">
    <div className="row p-3">
      <div className="col-sm-6 location-info">
        <div className="row mt-0">
          <div className="col-sm-12 current-city">
            <span id="city">{props.data.city}, </span>
            <span id="country">{props.data.country}</span>
            <p>
              <span className="last-update">
                Last updated:{" "}
                <span id="last-update">
                  <FormattedDate date={props.data.date} />
                </span>
              </span>
            </p>
          </div>

          <div className="row m-0 p-0">
            <div className="col-12 suntime">
              Sunrise: <span id="sunrise">{props.data.sunrise}</span>h | Sunset:
              <span id="sunset">{props.data.sunset}</span>h
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 weather-info">
        <div className="row m-0 mt-0">
          <div className="col-sm-8 current-weather">
            <p id="temperature">{props.data.temperature}</p>
            <span className="unit">°C</span>
            <br />
            <span id="description" className="text-capitalize">
              {props.data.description}
            </span>
          </div>
          <div className="col-sm-4 mt-4 px-0">
            <img
              src={props.data.iconURL}
              id="main-icon"
              className="img-fluid main-icon"
              alt={props.data.description}
            />
          </div>
        </div>

        <div className="row m-0 mt-4">
          <div className="col-sm-12 info-description">
            <ul>
              <li>
                Temperature feels like
                <span className="info-value">
                  <span id="felt-temperature"> {props.data.felttemp}</span>
                  °C
                </span>
              </li>
              <li>
                Humidity:
                <span className="info-value">
                  <span id="humidity">{props.data.humidity}</span>%
                </span>
              </li>
              <li>
                Windspeed:
                <span className="info-value">
                  <span id="wind">{props.data.wind}</span> m/s
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
  </div>;
}
