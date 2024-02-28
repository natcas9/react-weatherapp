import React from "react";
import FormattedDay from "./FormattedDay";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="information">
        <li>
          <FormattedDay date={props.data.date} />
        </li>
        <li>Mostly Cloudy</li>
        <li className="temperature">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather"
            id="icon"
          ></img>
          {Math.round(props.data.temperature)} <span className="unit">°C</span>
        </li>
        <li className="text-capitalize">{props.description}</li>
        <li>Humidity:{props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
