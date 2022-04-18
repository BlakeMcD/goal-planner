import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../actions/actionCreator';


function CategoryFilterButton(props) {

    //DISPATCH
    const dispatch = useDispatch();

    //SELECTOR
    const selectorFilters = useSelector((state) => {
        const stateFilters = state.filters;
        if (stateFilters === undefined) {
            return []
        }
        return stateFilters
    });

    //FUNCTIONS
    const addFilterToStore = (filterCategory) => {
        if (selectorFilters.includes(filterCategory)) {
            return null
        }
        dispatch(addFilter(filterCategory));
    }

    const removeFilterFromStore = (filterCategory) => {
        if (selectorFilters.includes(filterCategory)) {
            dispatch(removeFilter(filterCategory));
        }
        return null
    }

    //RETURN STATEMENT
    return (
        <div>
            <button onClick={() => addFilterToStore(props.filterCategory)}>Cat Filter Button for {props.filterCategory}</button>
            <button onClick={() => removeFilterFromStore(props.filterCategory)}>Remove Filter Button for {props.filterCategory}</button>
        </div>
    )
}

export default CategoryFilterButton