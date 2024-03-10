import React from "react";
import FormattedDay from "./FormattedDay";

import WeatherIcon from "./WeatherIcon";

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
          <WeatherIcon code={props.data.icon} />
          {Math.round(props.data.temperature)} <span className="unit">°C</span>
        </li>
        <li className="text-capitalize">{props.description}</li>
        <li>Humidity:{props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
