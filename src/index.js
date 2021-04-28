import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "../src/Components/LandingPage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
