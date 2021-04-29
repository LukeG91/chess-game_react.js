import React from "react";
import ChessBoardSquares from "./ChessBoardSquares";
import "./MyChessBoard.css";

/*============================================================================================
Resource used for the code below:
YouTube video:
Title of video: React Tutorial: Build a chess ♖ game with react ,rxjs and react drag and drop
Publisher: Esteban Codes
Date published: August 25, 2020
Link to video: https://www.youtube.com/watch?v=kBR7pDLcC3A&t=617s
/*============================================================================================*/

export default function MyChessBoard({ chessBoard }) {
  /* Declaring functions to get the X and Y positions and to check colors on the board. */
  function retrieveXandYposition(i) {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
  }
  function isBlack(i) {
    const { x, y } = retrieveXandYposition(i);
    return (x + y) % 2 === 1;
  }

  /* Declaring a function to obtain the position of the chess piece which will accept the index(i) as a parameter. */
  function obtainPiecePosition(i) {
    const { x, y } = retrieveXandYposition(i);
    /* Declaring an array to contain all of the letters on the X axis of the chess board so that I can return the 
       position of the chess piece on the X axis. */
    const chessLetters = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    /* Adding 1 to y as I do not want the index to be set to 0. */
    return `${chessLetters}${y + 1}`;
  }

  return (
    <div className="chessBoard">
      {chessBoard.flat().map((chessPiece, i) => (
        /* Setting the key to be the item property. */
        <div key={i} className="chessSquare">
          <ChessBoardSquares
            chessPiece={chessPiece}
            black={isBlack(i)}
            obtainPiecePosition={obtainPiecePosition(i)}
          />
        </div>
      ))}
    </div>
  );
}
