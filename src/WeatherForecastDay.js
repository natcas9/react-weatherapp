import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = props.data.temperature.maximum;
    if (props.unit === "fahrenheit") {
      temperature = (temperature * 9) / 5 + 32;
    }
    return `${Math.round(temperature)}°`;
  }

  function minTemperature() {
    let temperature = props.data.temperature.minimum;
    if (props.unit === "fahrenheit") {
      temperature = (temperature * 9) / 5 + 32;
    }
    return `${Math.round(temperature)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()} </div>
      <WeatherIcon code={props.data.condition.icon} size={20} isForecast />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
