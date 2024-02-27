import React from "react";
import FormattedDay from "./FormattedDay";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.city}</h1>
      <ul className="information">
        <li>
          <FormattedDay date={props.date} />
        </li>
        <li>Mostly Cloudy</li>
        <li className="temperature">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather"
            id="icon"
          ></img>
          {Math.round(props.temperature)} <span className="unit">°C</span>
        </li>
        <li className="text-capitalize">{props.description}</li>
        <li>Humidity:{props.humidity}%</li>
        <li>Wind: {props.wind} km/h</li>
      </ul>
    </div>
  );
}
