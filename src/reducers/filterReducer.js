const filterReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_FILTER':
            return [...state, action.item];

        case 'REMOVE_FILTER':
            return state.filter((value) => 
                (value !== action.item)
            )
            
        default: 
        return state;
    }
};

export default filterReducer;
