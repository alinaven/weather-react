import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
      </div>
      <footer id="Github-link">
        <a
          href="https://github.com/alinaven/my-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          👩🏼‍💻 Open-source code{" "}
        </a>
        by Alina Vennes
      </footer>
    </div>
  );
}

export default App;
