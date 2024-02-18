import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>London</h1>
      <ul className="information">
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
        <li className="temperature">
          {" "}
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="image"
            id="icon"
          ></img>
          6 <span className="unit">°C</span>
        </li>

        <li>Precipitation: 15%</li>
        <li>Wind: 13 km/h</li>
      </ul>
    </div>
  );
}
