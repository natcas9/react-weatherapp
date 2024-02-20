import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Natalia Casarin and is{" "}
          <a
            href="https://github.com/natcas9/react-weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
        </footer>
      </div>
    </div>
  );
}
