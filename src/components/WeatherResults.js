import React from "react";

function WeatherResults({ temp }) {
  return (
    <div className="weather-results">
      <div className="temp">{temp}</div>
    </div>
  );
}

export default WeatherResults;
