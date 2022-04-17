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

        case 'DELETE_YEAR':
            return state.filter((obj) => {
                return obj.uuid !== action.item.timeUuid
            })
            
        default: 
        return state;
    }
};

export default yearReducer;