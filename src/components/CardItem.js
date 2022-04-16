import React, { useState } from 'react'

function CardItem() {

    //STATES
    const [itemText, setItemText] = useState("type hereeeee")

    //FUNCTIONS
    const changeText = (event) => {
        setItemText(event.target.value);
    }

    const checkIfEnterPressed = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          event.target.blur();
        }
    };

    //RETURN
    return (
        <div>
            <input value={itemText} onChange={changeText} onKeyDown={(event) => checkIfEnterPressed(event)}></input>
        </div>
    )
}

export default CardItem