const dayReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_DAY':
            return [...state, action.item];

        case 'EDIT_DAY_TITLE':
            return state.map((obj) => {
                if (obj.uuid === action.item.timeUuid) {
                    return({
                        uuid: obj.uuid, 
                        day: action.item.text
                    })
                }
                return obj
            })

        case 'DELETE_DAY':
            return state.filter((obj) => {
                return obj.uuid !== action.item.timeUuid
            })
            
        default: 
        return state;
    }
};

export default dayReducer;