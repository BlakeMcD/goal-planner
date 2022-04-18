const optionsReducer = (state = [
    "body", 
    "mind", 
    "family",
    "relationships", 
    "money", 
    "career", 
    "misc"
  ], action) => {
    switch(action.type) {

        case 'ADD_OPTION':
            return [...state, action.item];
            
        default: 
        return state;
    }
};

export default optionsReducer;