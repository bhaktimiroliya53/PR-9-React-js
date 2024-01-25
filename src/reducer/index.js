import { combineReducers } from "redux";
import curdReducer from "./crudReducer";

const rootReducer = combineReducers({
    crud : curdReducer
})

export default rootReducer;