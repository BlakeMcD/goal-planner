import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CategoryCard from './CategoryCard';
import { addCategory, editYearTitle, editMonthTitle, editWeekTitle, editDayTitle, deleteYear, deleteMonth, deleteWeek, deleteDay, deleteCategoriesByTime } from '../actions/actionCreator';

function TimeBlock(props) {

  console.log("timeBlock props:", props)

  //CONSTANTS AND VARIABLES
  const categoryOptions = [
    "Body", 
    "Mind", 
    "Family",
    "Relationships", 
    "Money", 
    "Career", 
    "Misc"
  ];

  //STATES
  const [cardTitle, setCardTitle] = useState(props.timeCat.replace(/s/g,''));

  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const catBlocks = useSelector((state) => {
    return state.categories;
  })

  //USEEFFECT
  useEffect(() => {
    console.log("props passed to useEffect:", props)

    switch (props.timeCat) {
      case "years":
        dispatch(editYearTitle({
          timeUuid: props.timeUuid,
          text: cardTitle
        }));
        break;

      case "months":
        dispatch(editMonthTitle({
          timeUuid: props.timeUuid,
          text: cardTitle
        }));
        break;

      case "weeks":
        dispatch(editWeekTitle({
          timeUuid: props.timeUuid,
          text: cardTitle
        }));
        break;
      
      case "days":
      dispatch(editDayTitle({
        timeUuid: props.timeUuid,
        text: cardTitle
      }));
        break;

      default:
        console.log("unrecognized props passed to useEffect")
    }

    
}, [cardTitle])

  //FUNCTIONS
  const displayCategoryCards = () => {
    let allItems = [];
    for (let i = 0; i < catBlocks.length; i++) {

      if (catBlocks[i].timeUuid === props.timeUuid)
        allItems.push(
          <CategoryCard key={catBlocks[i].uuid} timeCat={catBlocks[i].timeCat} uuid={catBlocks[i].uuid} timeUuid={catBlocks[i].timeUuid} category={catBlocks[i].category} />
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
        <button key={i} onClick={() => addCategoryCard(catOptions[i])}>Add Category Card {catOptions[i]}</button>
      )}
    return allItems
  }

  const changeTitle = (event) => {
    setCardTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFocus = (event) => event.target.select();

  const checkIfEnterPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.target.blur();
    }
  };

  const deleteTimeBlock = () => {

    //delete timeBlock
    switch (props.timeCat) {
      case "years":
        dispatch(deleteYear({
          timeUuid: props.timeUuid,
        }));
        break;

      case "months":
        dispatch(deleteMonth({
          timeUuid: props.timeUuid,
        }));
        break;

      case "weeks":
        dispatch(deleteWeek({
          timeUuid: props.timeUuid,
        }));
        break;
      
      case "days":
      dispatch(deleteDay({
        timeUuid: props.timeUuid,
      }));
        break;

      default:
        console.log("unrecognized props passed to useEffect")
    }

    //delete Categories
    dispatch(deleteCategoriesByTime({
      timeUuid: props.timeUuid
    }))
  }

  //RETURN
  return (
    <div className="TimeBlock">

        {/* <form onSubmit={handleSubmit}> */}
          <input type="text" value={cardTitle} onChange={changeTitle} onFocus={handleFocus} onKeyDown={(event) => checkIfEnterPressed(event)}></input>
        {/* </form> */}
        {displayCategoryCards()}
        {displayAddCategoryCardButtons(categoryOptions)}
        <button onClick={deleteTimeBlock}>DELETE TIMEBLOCK</button>
    </div> 
  )
}
 
export default TimeBlock