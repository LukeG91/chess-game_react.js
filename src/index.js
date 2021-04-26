import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* Importing the libraries needed for this project. I installed them by running: (npm install rxjs react-dnd react-dnd-html5-backend chess.js)*/
import { DndProvider } from "react-dnd"; /* Drag and drop library. */
import { HTML5Backend } from "react-dnd-html5-backend"; /* HTML5 backend library. */

ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping my App component with the <DndProvider component and I am setting my backend property to {HTML5Backend}> */}
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
