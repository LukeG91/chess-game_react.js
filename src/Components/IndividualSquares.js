import React from "react";
import "./IndividualSquares.css";

function IndividualSquares({ children, black }) {
  const blackSquareClass = black ? "square-darkblue" : "square-white";
  return <div className={`${blackSquareClass} board-square`}>{children}</div>;
}

export default IndividualSquares;
