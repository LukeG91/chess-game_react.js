import React from "react";
import "./ChessPieces.css";
/* Importing the useDrag and DragPreviewImage hooks from the react-dnd library. */
import { useDrag, DragPreviewImage } from "react-dnd";

function ChessPieces({ chessPiece: { type, color }, obtainPiecePosition }) {
  const chessPiecePicture = `./chess-piece-images/${type}_${color}.png`;

  /* Destructuring an array with items from the useDrag hook
     and I am setting an item object. */

  const [{ isDragging }, drag, preview] = useDrag({
    type: "chessPiece",
    item: () => ({ id: `${obtainPiecePosition}_${type}_${color}` }),
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <>
      {/* Adding the ref tag to the 'chessPieceDiv'. */}
      {/* Adding opacity to the style of the image so that when a player drags a chess piece it no longer
          shows on the position that it was on prior to the player moving it. */}
      <DragPreviewImage connect={preview} src={chessPiecePicture} />
      <div className="chessPieceDiv" ref={drag}>
        <img
          src={chessPiecePicture}
          alt="Chess pieces"
          className="individualChessPieces"
        />
      </div>
    </>
  );
}

export default ChessPieces;
