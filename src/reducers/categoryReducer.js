const CategoryReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_CATEGORY':
            return [...state, action.item];
            
        default: 
        return state;
    }
};

export default CategoryReducer;