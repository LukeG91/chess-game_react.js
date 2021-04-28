import React from "react";
import IndividualSquares from "./IndividualSquares";
import { moveChessPiece } from "./MyChessGame";
import "./PlayerPromotion.css";

/* Declaring a variable to store the chess pieces that can be swapped out when a player receives a promotion. */

const optionsForPromotionPieces = ["n", "r", "b", "q"];

function PlayerPromotion({ playerPromo: { from, to, color } }) {
  return (
    <div className="chessBoard">
      {optionsForPromotionPieces.map((p, i) => (
        <div key={i} className="playerPromotionBlock">
          <IndividualSquares black={i % 3 === 0}>
            <div
              className="chessPieceDiv"
              onClick={() => moveChessPiece(from, to, p)}
            >
              {/* Getting and displaying the images of the promotion pieces. */}
              <img
                src={`./chess-piece-images/${p}_${color}.png`}
                alt="promotion pieces"
                className="individualChessPieces"
              />
            </div>
          </IndividualSquares>
        </div>
      ))}
    </div>
  );
}

export default PlayerPromotion;
