export function WinnerModal({ winner, resetGame }) {

    if ( winner == null ) { return null };
    
    return (
    <section className='winner'>
      <div className="text">
        <h2>
          {
            winner === false
            ? 'Draw'
            : <span><b className={`winner_${winner}`}>{winner}</b> wins</span>
          }
        </h2>
        <footer>
          <button className='button' onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
)};