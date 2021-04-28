import React, { useEffect, useState } from "react";
import IndividualSquares from "./IndividualSquares";
import ChessPieces from "./ChessPieces";
/* Importing the useDrop hook from react-dnd. */
import { useDrop } from "react-dnd";
import PlayerPromotion from "./PlayerPromotion";
import { chessMoveHandler } from "./MyChessGame";
import { chessGameSubject } from "./MyChessGame";

function ChessBoardSquares({ chessPiece, black, obtainPiecePosition }) {
  /* Setting state for playerPromo. */
  const [playerPromo, setPlayerPromo] = useState(null);
  /* Using the useDrop hook to set what the hook will accept, the accept property is set to the same name
     as the type in the ChessPieces component which is 'chessPiece'. */
  const [, drop] = useDrop({
    accept: "chessPiece",
    drop: (item) => {
      /* Using the split() method to split the string of the ID linked to item with an underscore (_). */
      const [startingPosition] = item.id.split("_");
      chessMoveHandler(startingPosition, obtainPiecePosition);
    },
  });
  /* The code below is going to be used to check when a player will receive a promotion. */

  useEffect(() => {
    const newSubscription = chessGameSubject.subscribe(
      ({ playerAwaitingPromotion }) =>
        playerAwaitingPromotion &&
        playerAwaitingPromotion.to === obtainPiecePosition
          ? setPlayerPromo(playerAwaitingPromotion)
          : setPlayerPromo(null)
    );
    return () =>
      newSubscription.unsubscribe(); /* Calling the unsubscribe method as it is available in the observable. */
  }, []);

  return (
    /* Adding the ref tag to the 'board-square' Div. The ref tag is used in React to allow access to a DOM element whereby changes need to be
       made to a child component without using props.*/
    <div className="board-square" ref={drop}>
      <IndividualSquares black={black}>
        {playerPromo ? (
          <PlayerPromotion playerPromo={playerPromo} />
        ) : chessPiece ? (
          <ChessPieces
            chessPiece={chessPiece}
            obtainPiecePosition={obtainPiecePosition}
          />
        ) : null}
      </IndividualSquares>
    </div>
  );
}

export default ChessBoardSquares;
