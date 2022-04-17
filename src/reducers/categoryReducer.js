const categoryReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_CATEGORY':
            console.log("categoryReducer action:", action)
            return [...state, action.item];

        case 'DELETE_CATEGORY':
            console.log("state:", state)
            return state.filter((obj) => {
                console.log("obj:", obj);
                console.log("action.item.uuid:", action.item.catUuid);
                return obj.uuid !== action.item.catUuid
            })

        case 'DELETE_CATEGORIES_BY_TIME':
            console.log("state:", state)
            return state.filter((obj) => {
                console.log("obj:", obj);
                console.log("action.item.uuid:", action.item.catUuid);
                return obj.timeUuid !== action.item.timeUuid
            })
            
        default: 
        return state;
    }
};

export default categoryReducer;