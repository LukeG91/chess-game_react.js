import React from "react";

function IndividualSquares({ children, black }) {
  const blackSquareClass = black ? "square-black" : "square-white";
  return <div className={`${blackSquareClass} board-square`}>{children}</div>;
}

export default IndividualSquares;
