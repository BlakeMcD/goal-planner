import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import optionsReducer from "./optionsReducer";
import yearReducer from "./yearReducer";
import monthReducer from "./monthReducer";
import weekReducer from "./weekReducer";
import dayReducer from "./dayReducer";
import categoryReducer from "./categoryReducer";
import itemReducer from "./itemReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    options: optionsReducer,
    filters: filterReducer,
    years: yearReducer, 
    months: monthReducer, 
    weeks: weekReducer, 
    days: dayReducer, 
    categories: categoryReducer,
    items: itemReducer, 
    theme: themeReducer
});

export default rootReducer