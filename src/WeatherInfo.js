import React from "react";
import FormattedDay from "./FormattedDay";
import WeatherTemperature from "./WeatherTemperature";
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
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </li>
        <li className="text-capitalize">{props.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
