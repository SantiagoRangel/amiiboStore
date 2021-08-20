import { combineReducers } from "redux";
import { amiiboReducer } from "./amiiboReducer";

const reducers = combineReducers({
    allProducts: amiiboReducer,
   
});

export default reducers;