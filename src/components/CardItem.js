import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editItemTitle, deleteItem } from '../actions/actionCreator';

function CardItem(props) {

    console.log("CardItem props: ", props)

    //STATES
    const [itemText, setItemText] = useState("type here");

    //DISPATCH
    const dispatch = useDispatch();

    //USEEFFECT
    useEffect(() => {
        console.log("props passed to CardItem useEffect:", props)

        dispatch(editItemTitle({
            timeUuid: props.uuid,
            text: itemText
        }));
       
    }, [itemText])

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

    const handleFocus = (event) => event.target.select();

    const deleteItemFromStore = () => {
        console.log("deleteItem command sent")
        dispatch(deleteItem({
            uuid: props.uuid
        }));
    }

    //RETURN
    return (
        <div>
            <input value={itemText} onChange={changeText} onFocus={handleFocus} onKeyDown={(event) => checkIfEnterPressed(event)}></input>
            <button onClick={deleteItemFromStore}>Delete Item</button>
        </div>
    )
}

export default CardItem