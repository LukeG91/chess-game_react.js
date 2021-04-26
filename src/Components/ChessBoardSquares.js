import React from "react";
import IndividualSquares from "./IndividualSquares";
import ChessPieces from "./ChessPieces";

function ChessBoardSquares({ chessPiece, black }) {
  return (
    <div className="board-square">
      <IndividualSquares black={black}>
        {chessPiece && <ChessPieces chessPiece={chessPiece} />}
      </IndividualSquares>
    </div>
  );
}

export default ChessBoardSquares;
