/* Importing the chess library from chess.js. */
import * as Chess from "chess.js";
/* Importing BehaviousSubject as an observable so that we can subscribe and that will allow us to listen/have access
   to the changes that are happening in the chess game. */
/* rxjs is a library that can be used to create observables. */
/* An observable produces multiple values and passes them over to oberservers which consume the data that is passed. */
import { BehaviorSubject } from "rxjs";

/* Setting a variable called chessGame which will create a new chess game using the Library we have imported above. */
const chessGame = new Chess();

export const chessGameSubject = new BehaviorSubject();

/* Creating a function to restart the chess Game. */
export function chessGamesRestart() {
  chessGame.reset();
  chessGameUpdate();
}

export function initialiseGame() {
  /* Declaring a variable to read from local storage and I'm using an if statement to check if there is data in local storage 
  for the 'updatedChessGame' key, then I am going to load the 'currentGamePosition' variable using the load() method that is 
  available in the chess library. I am doing this so that when a player clicks the refresh button in the browser, the game is not lost/reset.*/

  const currentGamePosition = localStorage.getItem("updatedChessGame");
  if (currentGamePosition) {
    chessGame.load(currentGamePosition);
  }
  chessGameUpdate();
}

/* Creating a handler to check if the player is going to receive a promotion. */

/*============================================================================================
Resource used for the code below:
YouTube video:
Title of video: React Tutorial: Build a chess ♖ game with react ,rxjs and react drag and drop
Publisher: Esteban Codes
Date published: August 25, 2020
Link to video: https://www.youtube.com/watch?v=kBR7pDLcC3A&t=617s
/*============================================================================================*/

export function chessMoveHandler(from, to) {
  /* Using verbose to obtain an array of all of the possible chess moves.*/
  /* Filtering through the array to select the promotions only. */

  const chessPromotions = chessGame
    .moves({
      verbose: true,
    })
    .filter((i) => i.promotion);
  console.log(chessPromotions);

  /* Writing an if statement to check if the from and to positions in the chessPromotions array are the same
     as the from and to positions from the move that the player made. */
  /* Using the some method to check if elements within the array pass the following test. */

  if (chessPromotions.some((p) => `${p.from}:${p.to}` === `${from}:${to}`)) {
    const playerAwaitingPromotion = {
      from,
      to,
      color: chessPromotions[1].color,
    };
    chessGameUpdate(playerAwaitingPromotion);
  }
  const { playerAwaitingPromotion } = chessGameSubject.getValue();

  /* Writing an if statement in order for the chess move to be allowed only if the player does not have
     a promotion awaiting.  */

  if (!playerAwaitingPromotion) {
    moveChessPiece(from, to);
  }
}

/* Creating a function to process the moving of the chess piece from the starting position to the new position. */

export function moveChessPiece(from, to, promotion) {
  let playerTempMove = { from, to };
  if (promotion) {
    playerTempMove.promotion = promotion;
  }
  const isMoveAllowed = chessGame.move(playerTempMove);
  if (isMoveAllowed) {
    /* Calling the chessGameUpdate function to update the chess game. */

    chessGameUpdate();
  }
}

/* Creating a function to update the chess game. */

function chessGameUpdate(playerAwaitingPromotion) {
  const chessGameIsDone = chessGame.game_over();

  const newChessGame = {
    chessBoard: chessGame.board(),
    playerAwaitingPromotion,
    chessGameIsDone,
    result: chessGameIsDone ? outComeOfChessGame() : null,
  };
  /* When the game is updated after a player moves a chess piece, I am going to set localStorage to store the
     position of the chess piece on the board by using the fen() method which stores the position of the chess
     piece in a string.*/

  localStorage.setItem("updatedChessGame", chessGame.fen());

  chessGameSubject.next(newChessGame);
}

/*============================================================================================
Resource used for the code below:
YouTube video:
Title of video: React Tutorial: Build a chess ♖ game with react ,rxjs and react drag and drop
Publisher: Esteban Codes
Date published: August 25, 2020
Link to video: https://www.youtube.com/watch?v=kBR7pDLcC3A&t=617s
/*============================================================================================*/

/* Creating a function to return the outcome of the game, stale mate, check mate, 50 moves rule, repetition or insufficient material. */

function outComeOfChessGame() {
  if (chessGame.in_checkmate()) {
    const winner = chessGame.turn() === "W" ? "BLACK" : "WHITE";
    return `CHECKMATE - WINNER - ${winner}`;
  } else if (chessGame.in_draw()) {
    let reason = "50 - MOVES - RULE";
    if (chessGame.in_stalemate()) {
      reason = "STALEMATE";
    } else if (chessGame.in_threefold_repetition()) {
      reason = "REPETITION";
    } else if (chessGame.insufficient_material()) {
      reason = "INSUFFICIENT MATERIAL";
    }
    return `DRAW - ${reason}`;
  } else {
    return "REASON IS UNKNOWN.";
  }
}
