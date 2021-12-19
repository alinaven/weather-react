import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="weatherTemperature">
      <p id="temperature">{Math.round(props.celsius)}</p>
      <span className="unit">°C </span>
    </span>
  );
}
