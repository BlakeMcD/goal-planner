const itemReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_ITEM':
            return [...state, action.item];

        case 'EDIT_ITEM_TITLE':
            return state.map((obj) => {
                if (obj.uuid === action.item.timeUuid) {
                    return({
                        timeUuid: obj.timeUuid,
                        catUuid: obj.catUuid,
                        uuid: obj.uuid, 
                        title: action.item.text
                    })
                }
                return obj
            });

        case 'DELETE_ITEM':
            console.log("state:", state)
            return state.filter((obj) => {
                console.log("obj:", obj);
                console.log("action.item.uuid:", action.item.uuid);
                return obj.uuid !== action.item.uuid
            })

        case 'DELETE_ITEMS_BY_CAT':
            console.log("state:", state)
            return state.filter((obj) => {
                console.log("obj:", obj);
                console.log("action.item.uuid:", action.item.uuid);
                return obj.catUuid !== action.item.catUuid
            })
        
        case 'DELETE_ITEMS_BY_TIME':
            console.log("state:", state)
            return state.filter((obj) => {
                console.log("obj:", obj);
                console.log("action.item.uuid:", action.item.uuid);
                return obj.timeUuid !== action.item.timeUuid
            })
            
        default: 
        return state;
    }
};

export default itemReducer;

// case 'DELETE_YEAR_CATEGORY_ITEM':
//     return state.map(obj => {
//         return {
//             ...obj, 
//             categories: obj.categories.map((categoryBlock) => {
//                 if (categoryBlock.category === action.item.category) {
//                     return {
//                         category: categoryBlock.category, 
//                         items: categoryBlock.items.filter((item) => {
//                             return item.uuid !== action.item.uuid 
//                         })
//                     }
//                 }
//                 return categoryBlock
//             })
//         }
//     }) 