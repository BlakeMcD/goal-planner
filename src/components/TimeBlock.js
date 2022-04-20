import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CategoryCard from './CategoryCard';
import { addCategory, editYearTitle, editMonthTitle, editWeekTitle, editDayTitle, deleteYear, deleteMonth, deleteWeek, deleteDay, deleteCategoriesByTime, deleteItemsByTime } from '../actions/actionCreator';
import ICONS from '../images/icons';

function TimeBlock(props) {

  //CONSTANTS AND VARIABLES

  //STATES
  const [cardTitle, setCardTitle] = useState(props.timeCat.replace(/s/g,''));

  //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR

  const categoryOptions = useSelector((state) => {
    return state.options;
  });

  const catBlocks = useSelector((state) => {
    return state.categories;
  });

  const catFilters = useSelector((state) => {
    return state.filters;
  });

  //USEEFFECT
  useEffect(() => {
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

      if (catBlocks[i].timeUuid === props.timeUuid) {

        console.log("filters result:", !catFilters.includes(catBlocks[i].category))

        if (!catFilters.includes(catBlocks[i].category.toLowerCase())) {
          allItems.push(
            <CategoryCard key={catBlocks[i].uuid} timeCat={catBlocks[i].timeCat} uuid={catBlocks[i].uuid} timeUuid={catBlocks[i].timeUuid} category={catBlocks[i].category} />
        )}
      };
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
    
      let iconImage = "";

      switch (catOptions[i]) {
        case 'health':
          iconImage = ICONS.healthBlackOutline;
          break;
        case 'finance':
          iconImage = ICONS.financeBlackOutline;
          break;
        case 'career':
          iconImage = ICONS.careerBlackOutline;
          break;
        case 'relationships':
          iconImage = ICONS.relationshipsBlackOutline;
          break;
        case 'personal':
          iconImage = ICONS.personalBlackOutline;
          break;
        case 'misc':
          iconImage = ICONS.miscBlackOutline;
          break;
        default: 
           iconImage = ICONS.careerBlackOutline;
      }

      allItems.push(
          <div className="iconImage" key={uuidv4()}>
          {/* <button key={i} onClick={() => addCategoryCard(catOptions[i])}>Add Category Card {catOptions[i]}</button> */}
            <img src={iconImage} onClick={() => addCategoryCard(catOptions[i])}/>
          </div>
      )}
    return (
      <div className="container__iconImages">
        {allItems}
      </div>
      )
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

    //delete Items
    dispatch(deleteItemsByTime({
      timeUuid: props.timeUuid
    }))
  }

  //RETURN
  return (
    <div className="TimeBlock">
        <div className="TimeBlock__Title">
          <input type="text" value={cardTitle} onChange={changeTitle} onFocus={handleFocus} onKeyDown={(event) => checkIfEnterPressed(event)}></input>
        </div>
        <p className="headingHelper">Add a category card</p>
        {displayAddCategoryCardButtons(categoryOptions)}
        {displayCategoryCards()}
        <img className="DeleteTimeblock" src={ICONS.closeBlackOutline} onClick={deleteTimeBlock}/>
    </div> 
  )
}
 
export default TimeBlock