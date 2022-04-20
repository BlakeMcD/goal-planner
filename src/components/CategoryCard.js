import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addItem, deleteCategory, deleteItemsByCat } from '../actions/actionCreator';
import CardItem from './CardItem';
import ICONS from '../images/icons';

function CategoryCard(props) {

    //DISPATCH
  const dispatch = useDispatch();

  //SELECTOR
  const catItems = useSelector((state) => {
    return state.items;
  })

    //FUNCTIONS
    const displayItems = () => {

      let allItems = [];
      for (let i = 0; i < catItems.length; i++) {
  
        if (catItems[i].catUuid === props.uuid)
          allItems.push(
            <CardItem key={catItems[i].uuid} timeUuid={props.timeUuid} catUuid={props.uuid} uuid={catItems[i].uuid}/>
        );
      }
      return allItems
    };

    const addCategoryItem = () => {
        dispatch(addItem({
            timeUuid: props.timeUuid,
            catUuid: props.uuid, 
            uuid: uuidv4(),
            title: "test title"
        }))
    }

    const deleteCategoryCard = () => {
      dispatch(deleteCategory({
          catUuid: props.uuid
      }))
      dispatch(deleteItemsByCat({
        catUuid: props.uuid
    }))
  }

  return (
    <div className="CategoryCard">
        <h3>{props.category}</h3>
        {displayItems()}
        <button className="Button__AddCategoryItem" onClick={() => addCategoryItem()}>Add Category Item</button>
        {/* <button onClick={() => deleteCategoryCard()}>Delete this card</button> */}
        <img className="DeleteTimeblock DeleteTimeBlock__CategoryCard" src={ICONS.closeBlackOutline} onClick={deleteCategoryCard}/>
    </div>
  )
}

export default CategoryCard