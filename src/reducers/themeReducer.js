const themeReducer = (state = [], action) => {
    switch(action.type) {

        case 'REPLACE_THEME':
            console.log("themeReducer action:", action)
            return [action.item];
            
        default: 
        return state;
    }
};

export default themeReducer;