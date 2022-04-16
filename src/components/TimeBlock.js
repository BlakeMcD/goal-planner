import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CategoryCard from './CategoryCard';
import { addCategory } from '../actions/actionCreator';

function TimeBlock(props) {

  //CONSTANTS AND VARIABLES
  const categoryOptions = [
    "Body", 
    "Mind", 
    "Family",
    "Relationships", 
    "Money", 
    "Career", 
    "Misc"
  ]

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
    return allItems
  };

  const addCategoryCard = (catType) => {
    //only add CategoryCard IF this category item doesn't already exist in this store's timeblock

    //return all items belong to this timeUuid
    let timeBlockCatCards = [];
    for (let i = 0; i < catBlocks.length; i++) {
      if (catBlocks[i].timeUuid === props.timeUuid)
        timeBlockCatCards.push(
          catBlocks[i]
      );
    };

    //if this category already exists in this time block, don't run the dispatch
    const existingCategory = timeBlockCatCards.find((catCard) => catCard.category === catType);
    if (existingCategory !== undefined) {
      console.log("There IS already this category in the timeblock");
      alert("You've already added this category")
      return null;
    }

    dispatch(addCategory({
      timeCat: props.timeCat, 
      timeUuid: props.timeUuid,
      uuid: uuidv4(),
      category: catType
    }))
  }

  const displayAddCategoryCardButtons = (catOptions) => {
    let allItems = [];
    for (let i = 0; i < catOptions.length; i++) {
      allItems.push(
        <button onClick={() => addCategoryCard(catOptions[i])}>Add Category Card {catOptions[i]}</button>
      )}
    return allItems
  }

  return (
    <div className="TimeBlock">
        <h1>Time Block</h1>
        {displayCategoryCards()}
        {displayAddCategoryCardButtons(categoryOptions)}
    </div> 
  )
}
 
export default TimeBlock