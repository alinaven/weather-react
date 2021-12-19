import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import FormattedTime from "./FormattedTime";
import "./Weather.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row p-3">
        <div className="col-sm-6 location-info">
          <div className="row mt-2">
            <div className="col-sm-12 current-city">
              <span id="city">{props.data.city}, </span>
              <span id="country">{props.data.country}</span>
              <div>
                <span className="last-update">
                  Last updated:{" "}
                  <span id="last-update">
                    <FormattedDate date={props.data.date} />
                  </span>
                </span>
              </div>
            </div>

            <div className="row m-0 p-0">
              <div className="col-12 suntime">
                ☀️ Sunrise: <FormattedTime date={props.data.sunrise} />h | 🌙
                Sunset: <FormattedTime date={props.data.sunset} />h
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 weather-info">
          <div className="row m-0 mt-0">
            <div className="col current-weather">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="col">
              <img
                src={props.data.iconURL}
                className="img-fluid main-icon"
                alt={props.data.description}
              />
            </div>
          </div>

          <div className="row m-0 mt-4">
            <div className="col-sm-12 info-description">
              <ul>
                <li id="description" className="text-capitalize">
                  {props.data.description}
                </li>
                <li>
                  <hr />
                </li>
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
                    <span id="humidity"> {props.data.humidity}</span>%
                  </span>
                </li>
                <li>
                  Windspeed:
                  <span className="info-value">
                    <span id="wind"> {props.data.wind}</span> m/s
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
