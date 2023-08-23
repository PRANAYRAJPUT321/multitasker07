import React, { useState } from 'react';
import './TemperatureConvertor.css';
import Navbar from "./Navbar";
import Footer from './Footer';

const TemperatureConvertor = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(convertToFarhenheit(value));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(convertToCelsius(value));
  };

  const convertToFarhenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  return (
    <div>
    <Navbar/>  
    <div className="big-card">
      <h1>Temperature Converter</h1>

      <div className="input-container">
        <label htmlFor="celsius-input">Celsius</label>
        <input
          id="celsius-input"
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>

      <div className="input-container">
        <label htmlFor="fahrenheit-input">Fahrenheit</label>
        <input
          id="fahrenheit-input"
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default TemperatureConvertor;





