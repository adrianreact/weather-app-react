import React, { useState, useEffect } from "react";
import CityForm from "./CityForm";
import WeatherResults from "./WeatherResults";
import "./App.css";

const APIkey = "8f19eeb8146b4b4873a4392f22cf91ed";

function App() {
  const [inputValue, setInputValue] = useState("Warszawa");
  const [isCity, setIsCity] = useState(false);
  const [temp, setTemp] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIkey}&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          setIsCity(true);
          return response.json();
        }

        throw new Error("No city");
      })
      .then((data) => {
        console.log(data);
        setTemp(data.main.temp);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setFeelsLike(data.main.feels_like);
        setPressure(data.main.pressure);
        setWind(data.wind.speed);
        setHumidity(data.main.humidity);
        setSunrise(data.sys.sunrise);
        setSunset(data.sys.sunset);
        setDate(getDate);
      })
      .catch(() => {
        setIsCity(false);
      });
  }, [inputValue]);

  function getDate() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return date + " " + time;
  }

  getDate();

  return (
    <div className="App">
      <CityForm inputValue={inputValue} setInputValue={setInputValue} />
      {isCity ? (
        <WeatherResults
          inputValue={inputValue}
          temp={temp}
          tempMin={tempMin}
          tempMax={tempMax}
          feelsLike={feelsLike}
          pressure={pressure}
          wind={wind}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
          date={date}
        />
      ) : (
        <h2>
          No results for <span>{inputValue}</span>
        </h2>
      )}
    </div>
  );
}

export default App;
