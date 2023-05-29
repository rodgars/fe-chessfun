import React from 'react';
import { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());

  const copyGame = (gm: Chess) => {
    const copy = Object.create(Object.getPrototypeOf(gm))
    return Object.assign(copy, gm);
  }

  function makeAMove(move: any) {
    const result = game.move(move);
    setGame(copyGame(game));
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare: any, targetSquare: any) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;

    // eslint-disable-next-line no-undef
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
}