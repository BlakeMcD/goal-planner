//YEAR
export const addYear = (payload) => {
    return {
        type: "ADD_YEAR", 
        item: payload
    };
};

//MONTH
export const addMonth = (payload) => {
    return {
        type: "ADD_MONTH", 
        item: payload
    };
};

//WEEK
export const addWeek = (payload) => {
    return {
        type: "ADD_WEEK", 
        item: payload
    };
};

//DAY
export const addDay = (payload) => {
    return {
        type: "ADD_DAY", 
        item: payload
    };
};