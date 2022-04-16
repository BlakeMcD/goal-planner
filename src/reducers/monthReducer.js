const monthReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_MONTH':
            return [...state, action.item];
            
        default: 
        return state;
    }
};

export default monthReducer;