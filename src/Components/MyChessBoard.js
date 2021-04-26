import React from "react";
import ChessBoardSquares from "./ChessBoardSquares";

export default function MyChessBoard({ chessBoard }) {
  function retrieveXandYposition(i) {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
  }
  function isBlack(i) {
    const { x, y } = retrieveXandYposition(i);
    return (x + y) % 2 === 1;
  }
  return (
    <div className="chessBoard">
      {chessBoard.flat().map((chessPiece, i) => (
        /* Setting the key to be the item property. */
        <div key={i} className="chessSquare">
          <ChessBoardSquares chessPiece={chessPiece} black={isBlack(i)} />
        </div>
      ))}
    </div>
  );
}

// import React from "react";

// export const MyChessBoard = ({ chessBoard }) => {
//   return (
//     /* Returning the JSX needed on the web page. */
//     <div id="chessBoard">
//       {/* Mapping through the chessBoard array */}
//       {chessBoard.map((chessPiece, item) => (
//         /* Giving each item a key which will be set to 'item'. */
//         <div key={item}>
//           <p>{JSON.stringify(chessPiece)}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyChessBoard;
