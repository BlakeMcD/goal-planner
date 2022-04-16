const dayReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_DAY':
            return [...state, action.item];
            
        default: 
        return state;
    }
};

export default dayReducer;