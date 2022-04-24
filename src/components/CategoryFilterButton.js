import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../actions/actionCreator';
import ICONS from '../images/icons';


function CategoryFilterButton(props) {

    //STATE
    const [selected, setSelected] = useState(true);

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

    const toggleFilter = (props) => {
        if (selected) {
            setSelected(false);
            addFilterToStore(props);
        }
        else {
            setSelected(true);
            removeFilterFromStore(props)
        }
    }

    const filterPic = (props) => {
        switch (props) {
            case "health":
                if (selected) {
                    return ICONS.healthBlackOutlineSelected
                };
                return ICONS.healthBlackOutlineSelectedNot
                break;
            case "finance":
                if (selected) {
                    return ICONS.financeBlackOutlineSelected
                };
                return ICONS.financeBlackOutlineSelectedNot
                break;
            case "career":
                if (selected) {
                    return ICONS.careerBlackOutlineSelected
                };
                return ICONS.careerBlackOutlineSelectedNot
                break;
            case "relationships":
                if (selected) {
                    return ICONS.relationshipsBlackOutlineSelected
                };
                return ICONS.relationshipsBlackOutlineSelectedNot
                break;
            case "personal":
                if (selected) {
                    return ICONS.personalBlackOutlineSelected
                };
                return ICONS.personalBlackOutlineSelectedNot
                break;
            case "misc":
                if (selected) {
                    return ICONS.miscBlackOutlineSelected
                }
                return ICONS.miscBlackOutlineSelectedNot
                break;
            default: 
                console.log("There was an error returning the correct item image"); 
                return ICONS.miscBlackOutline
        }
    }

    //RETURN STATEMENT
    return (
        <div>
            <img className="FilterCategory__Button" src={filterPic(props.filterCategory)} onClick={() => toggleFilter(props.filterCategory)}/>
            {/* <button onClick={() => addFilterToStore(props.filterCategory)}>Cat Filter Button for {props.filterCategory}</button>
            <button onClick={() => removeFilterFromStore(props.filterCategory)}>Remove Filter Button for {props.filterCategory}</button> */}
        </div>
    )
}

export default CategoryFilterButton