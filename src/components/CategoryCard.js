import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addItem, deleteCategory, deleteItemsByCat } from '../actions/actionCreator';
import CardItem from './CardItem';

function CategoryCard(props) {

    //DISPATCH
  const dispatch = useDispatch();

  console.log("CategoryCard Props:", props)

  //SELECTOR
  const catItems = useSelector((state) => {
    console.log("CategoryCard State Items:",state.items)
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

      console.log("deleteCategoryCard function ran")
      console.log("deleteCategoryCard props:", props)
      dispatch(deleteCategory({
          catUuid: props.uuid
      }))
      dispatch(deleteItemsByCat({
        catUuid: props.uuid
    }))
  }

  return (
    <div className="CategoryCard">
        {/* <p>This is a category card</p>
        <p>yearUuid: {props.yearUuid}</p>
        <p>selfUuid: {props.uuid}</p> */}
        <h3>{props.category}</h3>
        {displayItems()}
        <button onClick={() => addCategoryItem()}>Add Category Item</button>
        <button onClick={() => deleteCategoryCard()}>Delete this card</button>
    </div>
  )
}

export default CategoryCard