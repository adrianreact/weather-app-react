import React, { useState } from "react";
import CityForm from "./CityForm";
import WeatherResults from "./WeatherResults";
import "./App.css";

const APIkey = "8f19eeb8146b4b4873a4392f22cf91ed";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [temp, setTemp] = useState(0);

  const handleClick = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIkey}&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("brak miasta w bazie");
      })
      .then((data) => {
        setTemp(data.main.temp);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <CityForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleClick={handleClick}
      />
      <WeatherResults temp={temp} />
    </div>
  );
}

export default App;
