import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti';
import { Square } from './components/Square.jsx'
import { TURNS } from './components/constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const updateBoard = (index) => {
    if (board[index] || winner !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const { winner: newWinner, line } = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setWinner(newWinner);
      setWinningLine(line);
    } else if (newWinner === false && newBoard.every((square) => square)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningLine([]);
    if (winner !== null) {
      setTurn(winner);
    } else {
      setTurn(TURNS.X);
    }
  };

  return (
    <div className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
      {
        board.map((_, index) => {
          return (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              isWinner={winningLine.includes(index)}
            >
              {board[index]}
            </Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>X</Square>
        <Square isSelected={turn === TURNS.O}>O</Square>
      </section>
      <button className='reset_button' onClick={resetGame}>Reset</button>
      <WinnerModal resetGame={resetGame} winner={winner}/>  
    </div>
  );
};

export default App;
