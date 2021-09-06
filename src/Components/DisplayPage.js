import React from "react";
import "./DisplayPage.css";
import { useState } from "react";

function DisplayPage() {
  /* Setting state so I can store the input that the player provides and display it on the web page. */
  const [name, setName] = useState("");

  return (
    <div className="DisplayPageContainer">
      <div className="DisplayPageContentContainer">
        <h1 className="welcomeChess">
          <em>Welcome all chess players:</em>
        </h1>
        <h1 className="enterPlayerName">Please enter your name below:</h1>
        {/* Storing the value that the player enters in state. */}
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          className="playerNameInput"
        />
        {/* Rendering out the name that the player provides. */}
        <h2 className="welcomeChessPlayer">Welcome: {name} </h2>
        <h2 className="wishPlayerWell">Best of luck and enjoy the game!</h2>
        {/* <p className="informingParagraph">
          <em>Please click the link below to proceed to the chess game.</em>
        </p> */}
        <a href="/app" className="linkToAppPage">
          Start game
        </a>
      </div>
    </div>
  );
}

export default DisplayPage;
