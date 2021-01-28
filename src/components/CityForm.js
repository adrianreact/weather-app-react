import React from "react";

function CityForm({ inputValue, setInputValue, handleClick }) {
  return (
    <div className="city-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default CityForm;
