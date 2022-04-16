const weekReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_WEEK':
            return [...state, action.item];

        case 'EDIT_WEEK_TITLE':
            return state.map((obj) => {
                if (obj.uuid === action.item.timeUuid) {
                    return({
                        uuid: obj.uuid, 
                        week: action.item.text
                    })
                }
                return obj
            })
            
        default: 
        return state;
    }
};

export default weekReducer;