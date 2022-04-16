const itemReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_ITEM':
            return [...state, action.item];

        case 'EDIT_ITEM_TITLE':
            return state.map((obj) => {
                if (obj.uuid === action.item.timeUuid) {
                    return({
                        catUuid: obj.catUuid,
                        uuid: obj.uuid, 
                        year: action.item.text
                    })
                }
                return obj
            })
            
        default: 
        return state;
    }
};

export default itemReducer;

//REFERENCE
// dispatch(editItemTitle({
//     timeUuid: props.uuid,
//     text: itemText
// }));