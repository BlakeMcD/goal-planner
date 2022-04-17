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
        
        case 'DELETE_MONTH':
            return state.filter((obj) => {
                return obj.uuid !== action.item.timeUuid
            })
            
        default: 
        return state;
    }
};

export default monthReducer;