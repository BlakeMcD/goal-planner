const monthReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_MONTH':
            return [...state, action.item];

        case 'EDIT_MONTH_TITLE':
        return state.map((obj) => {
            if (obj.uuid === action.item.timeUuid) {
                return({
                    uuid: obj.uuid, 
                    month: action.item.text
                })
            }
            return obj
        })
            
        default: 
        return state;
    }
};

export default monthReducer;