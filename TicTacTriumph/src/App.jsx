import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from  "./components/Log.jsx";
import  GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const PLAYERS ={
  X:'Players 1',
  O : 'Players 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(game_turns){
  let currentPlayer = 'X';
      if(game_turns.length > 0 && game_turns[0].player ==='X'){
        currentPlayer ='O';   
      }

  return currentPlayer;
}
function deriveWinner(gameBoard,players){
  let winner=null;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];

 
    if (
      firstSquareSymbol !== null &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner =players[firstSquareSymbol];
    }
    
}
 return winner;
}

function deriveGameBoard(GameTurns){
  
    /*doing a deep copy to avoid refernce by value
    so that when board refershes the array also refereshes/
    */
      let gameBoard = [...INITIAL_GAME_BOARD.map(array=>([...array]))];
      for(const turn of GameTurns){
         const {square,player} = turn;
         const { row, col} = square;
         gameBoard[row][col]= player; // this is known as deriving state
      }
      return gameBoard;
}


function App() {
  const [GameTurns,setGameTurns]= useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  // we should try to derive as many values as possible from a exsisiting state 
  //before assigning a all together a exsisiting state
  // const [activePlayer, setactivePlayer] = useState('X');

  // reduced 2 states to 1 using this function
  const activePlayer = deriveActivePlayer(GameTurns); 
  const gameBoard = deriveGameBoard(GameTurns);

 const winner= deriveWinner(gameBoard,players);
  const hasDraw = GameTurns.length === 9 && !winner;

  

  
  function handleSelectSquare(rowIndex,colIndex){
    // setactivePlayer((curactivePlayer)=>(curactivePlayer === 'X' ? 'O': 'X'));
    setGameTurns((prevTurns)=>{
      const currentPlayer=deriveActivePlayer(prevTurns);
      const updatedTurns =[
        { square : {row : rowIndex,col: colIndex},
        player : currentPlayer
        },
        ...prevTurns
      ];
      return updatedTurns;
  });

}

function handleRestart(){
  setGameTurns([]);
}

function handlePlayerName(symbol,newName){
  setPlayers(prevPlayers=>{
    return {
      ...prevPlayers,
      [symbol] : newName
    };
  });
}

  return (
    <main>
      <div id ="game-container">
      <ol id="players" className="highlight-player">
      <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer ==='X'} onChangeName={handlePlayerName}/>
      <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer ==='O'} onChangeName={handlePlayerName}/>
      </ol>
      {(winner|| hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>  
      <Log turns={GameTurns} />
    </main>
  );
}

export default App
