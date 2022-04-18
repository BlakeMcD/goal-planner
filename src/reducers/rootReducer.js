import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import yearReducer from "./yearReducer";
import monthReducer from "./monthReducer";
import weekReducer from "./weekReducer";
import dayReducer from "./dayReducer";
import categoryReducer from "./categoryReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
    filters: filterReducer,
    years: yearReducer, 
    months: monthReducer, 
    weeks: weekReducer, 
    days: dayReducer, 
    categories: categoryReducer,
    items: itemReducer
});

export default rootReducer