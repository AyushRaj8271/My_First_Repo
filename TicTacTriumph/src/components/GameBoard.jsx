

export default function GameBoard({onSelectSquare,board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowindex, colindex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowindex][colindex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    // // Call onSelectSquare when a square is selected
    // onSelectSquare();
    // }

  

    return (
        <ol id="game-board">
            {board.map((row, rowindex) => (
                <li key={rowindex}>
                    <ol>
                        {row.map((playerSymbol, colindex) => (
                            <li key={colindex}>
                                <button
                                    onClick={()=>onSelectSquare(rowindex,colindex)} disabled={playerSymbol!=null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
