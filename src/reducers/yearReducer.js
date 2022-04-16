const yearReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_YEAR':
            return [...state, action.item];

        case 'EDIT_YEAR_TITLE':
            return state.map((obj) => {
                if (obj.uuid === action.item.timeUuid) {
                    return({
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

export default yearReducer;