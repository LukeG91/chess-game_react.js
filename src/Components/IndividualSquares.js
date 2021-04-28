import React from "react";
import "./IndividualSquares.css";

function IndividualSquares({ children, black }) {
  /* Checking to see if the prop 'black' is returned, if it is it will assign the "square-darkblue" className,
     otherwise the "square-white" className will be assigned. */

  const blackSquareClass = black ? "square-darkblue" : "square-white";
  /* Assigning/placing the blocks/squares for the game on the board (blackSquareClass), setting up the square 
     of the board (board-square), and I am placing the chess pieces on the board (children)*/
  return <div className={`${blackSquareClass} board-square`}>{children}</div>;
}

export default IndividualSquares;
