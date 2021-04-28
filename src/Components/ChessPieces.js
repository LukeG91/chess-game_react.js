import React from "react";
import "./ChessPieces.css";
/* Importing the useDrag and DragPreviewImage hooks from the react-dnd library. */
import { useDrag, DragPreviewImage } from "react-dnd";

function ChessPieces({ chessPiece: { type, color }, obtainPiecePosition }) {
  const chessPiecePicture = `./chess-piece-images/${type}_${color}.png`;

  /* Destructuring an array using the useDrag hook
     and I am setting an item object. */

  /* There was a change made in the react-dnd library to the useDrag hook, I am using version 14.0 so I needed
     to write the code the new way in order to use the useDrag hook successfully. */

  /*================================================================================
    Resource used for the code below:
          GitHub page:
          Link to page: https://github.com/react-dnd/react-dnd/releases/tag/v14.0.0
          Publisher: React DnD
          Date publsihed: 25 Mrach, 2021
  ================================================================================*/

  const [{ isDragging }, drag, preview] = useDrag({
    type: "chessPiece",
    item: () => ({ id: `${obtainPiecePosition}_${type}_${color}` }),
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <>
      {/* Adding the ref tag to the 'chessPieceDiv', this provides a way to access DOM elements. */}

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
