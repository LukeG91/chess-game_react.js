import React, { useState, useEffect } from "react";
import { chessGameSubject } from "./Components/MyChessGame";
import MyChessBoard from "./Components/MyChessBoard";
import "./App.css";

function App() {
  /* Setting state for the chess board to be an empty array. */
  const [chessBoard, setChessBoard] = useState([]);

  /* Implementing the useEffect hook in order to informReact that the component
     needs to perform an action after it has been rendered. */
  useEffect(() => {
    /* As 'chessGameSubject' is an observable we have access to the suscribe and unsubscribe properties.  */
    const playerSubscribes = chessGameSubject.subscribe((chessGame) =>
      setChessBoard(chessGame.chessBoard)
    );
    /* Unsubscribing. */
    return () => playerSubscribes.unsubscribe();
  }, []);
  return (
    <div className="App">
      {/* <h1>Welcome to my chess game.</h1> */}
      <div className="chessBoardDiv">
        <MyChessBoard chessBoard={chessBoard} />
      </div>
    </div>
  );
}

export default App;

/* 
Resource used for this task:
============================
YouTube video:
Title of video: React Tutorial: Build a chess ♖ game with react ,rxjs and react drag and drop
Publisher: Esteban Codes
Date published: August 25, 2020
Link to video: https://www.youtube.com/watch?v=kBR7pDLcC3A&t=617s
==============================================================================================
*/
