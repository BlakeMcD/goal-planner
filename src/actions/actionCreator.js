//FILTER
export const addFilter = (payload) => {
    return {
        type: "ADD_FILTER", 
        item: payload
    };
};

export const removeFilter = (payload) => {
    return {
        type: "REMOVE_FILTER", 
        item: payload
    };
};

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

export const deleteYear = (payload) => {
    return {
        type: "DELETE_YEAR", 
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

export const deleteMonth = (payload) => {
    return {
        type: "DELETE_MONTH", 
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

export const deleteWeek = (payload) => {
    return {
        type: "DELETE_WEEK", 
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

export const deleteDay = (payload) => {
    return {
        type: "DELETE_DAY", 
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

export const deleteCategory = (payload) => {
    return {
        type: "DELETE_CATEGORY", 
        item: payload
    };
};

export const deleteCategoriesByTime = (payload) => {
    return {
        type: "DELETE_CATEGORIES_BY_TIME", 
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

export const editItemTitle = (payload) => {
    return {
        type: "EDIT_ITEM_TITLE", 
        item: payload
    };
};

export const deleteItem = (payload) => {
    return {
        type: "DELETE_ITEM", 
        item: payload
    };
};

export const deleteItemsByCat = (payload) => {
    return {
        type: "DELETE_ITEMS_BY_CAT", 
        item: payload
    };
};

export const deleteItemsByTime = (payload) => {
    return {
        type: "DELETE_ITEMS_BY_TIME", 
        item: payload
    };
};