import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editItemTitle, deleteItem } from '../actions/actionCreator';
import ICONS from '../images/icons';
import TextareaAutosize from 'react-textarea-autosize';

function CardItem(props) {

    //STATES
    const [itemText, setItemText] = useState("type here");

    //DISPATCH
    const dispatch = useDispatch();

    //USEEFFECT
    useEffect(() => {

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
        dispatch(deleteItem({
            uuid: props.uuid
        }));
    }

    //RETURN
    return (
        <div className="ItemContainer">
            <TextareaAutosize className="ItemContainer__Input" value={itemText} onChange={changeText} onFocus={handleFocus} onKeyDown={(event) => checkIfEnterPressed(event)}></TextareaAutosize>
            {/* <button onClick={deleteItemFromStore}>Delete Item</button> */}
            {/* <img className="ItemContainer__DeleteButton" src={ICONS.closeBlackOutline} onClick={deleteItemFromStore}/> */}
        </div>
    )
}

export default CardItem