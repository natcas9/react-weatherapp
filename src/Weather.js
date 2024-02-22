import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDay from "./FormattedDay";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="information">
          <li>
            <FormattedDay date={weatherData.date} />
          </li>
          <li>Mostly Cloudy</li>
          <li className="temperature">
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="weather"
              id="icon"
            ></img>
            {Math.round(weatherData.temperature)}{" "}
            <span className="unit">°C</span>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
          <li>Humidity:{weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "17ad6e67aa629189f73b053634668b20";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
