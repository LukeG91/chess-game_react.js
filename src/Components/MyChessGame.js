/* Importing the chess library from chess.js. */
import * as Chess from "chess.js";
/* Importing BehaviousSubject as an observable so that we can subscribe to that will allow us to listen to the changes that are happening in the chess game. */
/* rxjs is a library that can be used to create observables. */
import { BehaviorSubject } from "rxjs";

/* Setting a constant called chessGame which will create a new chess game using the Library we have imported above. */
const chessGame = new Chess();

export const chessGameSubject = new BehaviorSubject({
  chessBoard: chessGame.board(),
});
