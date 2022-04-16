//YEAR
export const addYear = (payload) => {
    return {
        type: "ADD_YEAR", 
        item: payload
    };
};

export const editYearTitle = (payload) => {
    return {
        type: "EDIT_YEAR_TITLE", 
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

export const editMonthTitle = (payload) => {
    return {
        type: "EDIT_MONTH_TITLE", 
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

export const editWeekTitle = (payload) => {
    return {
        type: "EDIT_WEEK_TITLE", 
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

export const editDayTitle = (payload) => {
    return {
        type: "EDIT_DAY_TITLE", 
        item: payload
    };
};


//CATEGORIES
export const addCategory = (payload) => {
    return {
        type: "ADD_CATEGORY", 
        item: payload
    };
};

//ITEMS
export const addItem = (payload) => {
    return {
        type: "ADD_ITEM", 
        item: payload
    };
};