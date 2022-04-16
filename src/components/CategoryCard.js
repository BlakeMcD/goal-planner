import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '../actions/actionCreator';
import CardItem from './CardItem';

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
            <CardItem key={i} catUuid={props.uuid} uuid={catItems[i].uuid}/>
        );
      }
      console.log("allItems:", allItems);
      return allItems
    };

    const addCategoryItem = () => {
      console.log("add Cat Item Code Ran")
      console.log("categoryCard props:", props)


        dispatch(addItem({
            catUuid: props.uuid, 
            uuid: uuidv4(),
            title: "test title"
        }))
    }

  return (
    <div className="CategoryCard">
        {/* <p>This is a category card</p>
        <p>yearUuid: {props.yearUuid}</p>
        <p>selfUuid: {props.uuid}</p> */}
        <h3>CATEGORY CARD</h3>
        {displayItems()}
        <button onClick={() => addCategoryItem()}>Add Category Item</button>
    </div>
  )
}

export default CategoryCard