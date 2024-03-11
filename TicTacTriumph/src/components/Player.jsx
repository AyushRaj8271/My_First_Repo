import { useState } from "react";

export default function Player({ initialName, symbol ,isActive, onChangeName}) {
    const [isEditing, setEditing] = useState(false);
    const [playerName,setplayerName] = useState(initialName);
    function handleEditClick() {

        setEditing(asshole=>!asshole);
        if (isEditing) {
        onChangeName(symbol,playerName);
        }
    }

    function handleChange(eventValue){
        console.log(eventValue);
        setplayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type="text" required  value={playerName} onChange={handleChange}/>;
        btnCaption ='Save';
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{btnCaption}</button>
            </span>


        </li>
    );
}