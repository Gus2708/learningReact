export const Square = ({ children, isSelected, isWinner, updateBoard, index }) => {

  const className = 
    `square ${isSelected ? 'is-selected' : ''}
    ${children ? `${children}` : ''}
    ${isWinner ? 'is-winner' : ''}`;

  const handleClick = () => {
    updateBoard(index);
  }

  return (
  <div className={className} onClick={handleClick}>
    {children}
  </div>
)};