const weekReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_WEEK':
            return [...state, action.item];
            
        default: 
        return state;
    }
};

export default weekReducer;