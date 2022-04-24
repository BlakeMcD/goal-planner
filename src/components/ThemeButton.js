import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replaceTheme } from '../actions/actionCreator';
import ICONS from '../images/icons';


function ThemeButton(props) {



    //DISPATCH
    const dispatch = useDispatch();

    //SELECTOR
    const stateTheme = useSelector((state) => {
        return state.theme; 
    })

    //FUNCTIONS
    const changeTheme = (props) => {
        dispatch(replaceTheme(props));
        //change page background color
        const body = document.getElementByTagName('body');
        body.style.backgroundColor = 'pink';

    }

    //RETURN STATEMENT
    return (
        <div>
           <div onClick={() => changeTheme(props.theme)} className="themeButton" style={{backgroundColor: props.buttonColor}}></div>
        </div>
    )
}

export default ThemeButton