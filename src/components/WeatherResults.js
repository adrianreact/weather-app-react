import React from "react";

function WeatherResults({
  temp,
  tempMin,
  tempMax,
  feelsLike,
  pressure,
  inputValue,
  wind,
  humidity,
  sunrise,
  sunset,
  date,
}) {
  return (
    <>
      <h2>
        Weather in <span>{inputValue}</span>
      </h2>
      <h4>
        Day: <span>{date}</span>
      </h4>
      <div className="weather-results">
        <div className="temp-container col">
          <div className="temp">
            <span className="label">Temperature</span>
            <span className="result">{temp} &#176;C</span>
          </div>
          <div className="temp-min">
            <span className="label">Temperature min</span>
            <span className="result">{tempMin} &#176;C</span>
          </div>
          <div className="temp-max">
            <span className="label">Temperature max</span>
            <span className="result">{tempMax} &#176;C</span>
          </div>
          <div className="feels-like">
            <span className="label">Perceived temperature</span>
            <span className="result">{feelsLike} &#176;C</span>
          </div>
        </div>

        <div className="additional-data-container col">
          <div className="pressure">
            <span className="label">Pressure</span>
            <span className="result">{pressure} hPa</span>
          </div>
          <div className="wind">
            <span className="label">Wind speed</span>
            <span className="result">{wind} km/h</span>
          </div>
          <div className="humidity">
            <span className="label">Humidity</span>
            <span className="result">{humidity} %</span>
          </div>
        </div>

        <div className="sun-container col">
          <div className="sunrise">
            <span className="label">Sunrise</span>
            <span className="result">
              {new Date(sunrise * 1000).toLocaleTimeString()}
            </span>
          </div>
          <div className="sunset">
            <span className="label">Sunset</span>
            <span className="result">
              {new Date(sunset * 1000).toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherResults;
