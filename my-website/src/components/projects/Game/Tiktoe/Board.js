import  { useState } from 'react'
import Square from './Square';

export default function Board() {

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
        return squares[a];
      }
    }
    return null;
  }

    function renderSquare(i) {
        return (
          <Square
            value={first.squares[i]}
            onClick={() => {
              const squares = first.squares.slice();
              if (calculateWinner(squares) || squares[i]) {      return;    }
              if(squares[i]===null){
                squares[i] = first.xTurn ? 'X':'0';
                setfirst({ squares: squares,xTurn:!first.xTurn });
              }
              else {
                console.log('wrong entery')
              }
            }}
          />
        );
      }
    
    const [first, setfirst] = useState({
       squares : Array(9).fill(null) ,
       xTurn : true,
    })

    const winner = calculateWinner(first.squares);

    const status =winner? 'Winner ' +(winner) :'Next player: ' + (first.xTurn?'X':'0');
  return (
    <div className='Tik-game-box'>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  )
}
