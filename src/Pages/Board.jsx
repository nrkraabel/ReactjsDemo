import React, { useState } from 'react';
import './Board.css'; 
function Square({ value, onClick, highlight, gameActive }) {
  return (
    <button className={`square ${highlight ? 'highlight' : ''} ${gameActive ? 'active' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        highlight={winnerInfo && winnerInfo.line.includes(i)}
        gameActive={!winner}
      />
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <center><h1>TicTacToe</h1></center>
      <div className="game-board">
        <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
        <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
        <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
      </div>
      <div className="game-info">
        <center><div>{status}</div></center>
        <button onClick={handleReset} className="reset-button">Reset Game</button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

export default Board;
