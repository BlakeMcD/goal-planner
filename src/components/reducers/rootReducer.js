import { combineReducers } from "redux";
import yearReducer from "./yearReducer";
import monthReducer from "./monthReducer";
import weekReducer from "./weekReducer";
import dayReducer from "./dayReducer";

const rootReducer = combineReducers({
    years: yearReducer, 
    months: monthReducer, 
    weeks: weekReducer, 
    days: dayReducer
});

export default rootReducer