import React from "react";

function ChessPieces({ chessPiece: { type, color } }) {
  const chessPiecePicture = `./chess-piece-images/${type}_${color}.png`;
  return (
    <div>
      <img src={chessPiecePicture} alt="" />
    </div>
  );
}

export default ChessPieces;
