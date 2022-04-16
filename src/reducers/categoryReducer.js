const categoryReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_CATEGORY':
            console.log("categoryReducer action:", action)
            return [...state, action.item];
            
        default: 
        return state;
    }
};

export default categoryReducer;