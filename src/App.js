import React, { useState, useEffect } from "react";
import {
  chessGameSubject,
  initialiseGame,
  chessGamesRestart,
} from "./Components/MyChessGame";
import MyChessBoard from "./Components/MyChessBoard";
import "./App.css";

function App() {
  /* Writing code to display a prompt to as the players what their names are and then a message
     will be displayed on the web page once the players have entered their names. */

  function getPlayersNames() {
    let getPlayerOneName = prompt("Player 1, what is your name: ");
    let getPlayerTwoName = prompt("Player 2, what is your name: ");

    alert(
      "Welcome to my chess game " +
        getPlayerOneName +
        " and " +
        getPlayerTwoName +
        "\n" +
        "Best of luck!" +
        "\n" +
        "May the force be with you!"
    );
  }

  /* Setting state for the chess board to be an empty array. */
  const [chessBoard, setChessBoard] = useState([]);

  /* Setting state when the chess game is finished and also for the result of the game. */

  const [isGameFinished, setIsGameFinished] = useState();
  const [resultOfGame, setResultOfGame] = useState();

  /* Implementing the useEffect hook in order to informReact that the component
     needs to perform an action after it has been rendered. */
  useEffect(() => {
    getPlayersNames();
    initialiseGame();
    /* As 'chessGameSubject' is an observable we have access to the suscribe and unsubscribe properties.  */
    const playerSubscribes = chessGameSubject.subscribe((chessGame) => {
      setChessBoard(chessGame.chessBoard);
      setIsGameFinished(chessGame.chessGameIsDone);
      setResultOfGame(chessGame.result);
    });
    /* Unsubscribing. */
    return () => playerSubscribes.unsubscribe();
  }, []);
  return (
    <div className="App">
      {isGameFinished && (
        <div className="gameOverDiv">
          <span className="gameOverNotification">Chess Game Is Over</span>
          <button onClick={chessGamesRestart} className="playAgainButton">
            Play Another Game
          </button>
        </div>
      )}
      <div className="chessBoardDiv">
        <h1 className="mainHeading">
          <em>Welcome to Luke's chess game:</em>
        </h1>
        <p className="rulesParagraph">
          If you don't know how to play chess, click this{" "}
          <a
            href="https://www.instructables.com/Playing-Chess/"
            target="_blank"
            rel="noreferrer"
          >
            <em>link</em>
          </a>{" "}
          to learn the rules.
        </p>

        <MyChessBoard chessBoard={chessBoard} />
      </div>
      {/* Writing the necessary JSX to display the result of the game on the web page. */}
      {resultOfGame && <span className="chessGameResult">{resultOfGame}</span>}
    </div>
  );
}

export default App;

/* 
Resources used for this task:
==============================================================================================
YouTube video:
Title of video: React Tutorial: Build a chess ♖ game with react ,rxjs and react drag and drop
Publisher: Esteban Codes
Date published: August 25, 2020
Link to video: https://www.youtube.com/watch?v=kBR7pDLcC3A&t=617s
==============================================================================================

==============================================================================================
GitHub page:
Link to page: https://github.com/3stbn/react-chess
Publisher: Esteban Torres
Date publsihed: August 24, 2020
==============================================================================================

==============================================================================================
GitHub page:
Link to page: https://github.com/react-dnd/react-dnd/releases/tag/v14.0.0
Publisher: React DnD
Date publsihed: 25 Mrach, 2021
==============================================================================================
*/
