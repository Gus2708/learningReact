import { winLines } from '../components/constants.js';

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of winLines) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return { winner: boardToCheck[a], line: combo };
      }
    }
    return { winner: boardToCheck.every((square) => square) ? false : null, line: [] };
  };
