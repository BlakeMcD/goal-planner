import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CategoryCard from './CategoryCard';
import { addCategory } from '../actions/actionCreator';

function TimeBlock(props) {

  //STATE
//   const [counter, setCounter] = useState(0)

//   //USE EFFECT
//   useEffect(() => {    // Update the document title using the browser API    
//     console.log("TimeBlock Mounted")  
//   });

  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const catBlocks = useSelector((state) => {
    return state.categories;
  })

  //FUNCTIONS
  const displayCategoryCards = () => {

    let allItems = [];

    for (let i = 0; i < catBlocks.length; i++) {

      if (catBlocks[i].timeUuid === props.timeUuid)
        allItems.push(
          <CategoryCard key={i} timeCat={catBlocks[i].timeCat} uuid={catBlocks[i].uuid} timeUuid={catBlocks[i].timeUuid} category={catBlocks[i].category} />
      );
    }
    console.log("allItems:", allItems);
    return allItems
  };

  const addCategoryCard = () => {
    console.log("addCategoryCard function it TimeBlock ran")
    dispatch(addCategory({
      timeCat: props.timeCat, 
      timeUuid: props.timeUuid,
      uuid: uuidv4(),
      category: "test category"
    }))
  }

  return (
    <div className="TimeBlock">
        <h1>Time Block</h1>
        {/* <p>And my uuid is: {props.yearUuid}</p> */}
        {displayCategoryCards()}
        <button onClick={() => addCategoryCard()}>Add Category Card</button>
    </div> 
  )
}
 
export default TimeBlock