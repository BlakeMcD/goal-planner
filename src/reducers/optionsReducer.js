const optionsReducer = (state = [
    "health", 
    "finance", 
    "career",
    "relationships", 
    "personal",  
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