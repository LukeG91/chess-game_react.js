import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DisplayPage from "./DisplayPage";
import App from "../App";
/* Importing the libraries needed for this project. I installed them by running: 
   (npm install rxjs react-dnd react-dnd-html5-backend chess.js)*/
import { DndProvider } from "react-dnd"; /* Drag and drop library. */
import { HTML5Backend } from "react-dnd-html5-backend"; /* HTML5 backend library. */

/* I imported { BrowserRouter, Route, Switch } from react-router-dom and I am using these to render different web
   pages according to the URL that the user browses to. */

function LandingPage() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/">
              <DisplayPage />
            </Route>
            <Route path="/app">
              {/* Wrapping my App component with the <DndProvider component and I am setting my backend property to {HTML5Backend}> */}
              <DndProvider backend={HTML5Backend}>
                <App />
              </DndProvider>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default LandingPage;
