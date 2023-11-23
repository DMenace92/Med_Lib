import { combineReducers } from "redux";
import drugReducer from "./DrugReducer";
import drugSpecsReduceres from "./DrugSpecsReducer";
import DrugMfrReducer from './DrugMfrReducer'
const RootReducer = combineReducers({
    drug: drugReducer,
    drugId:drugReducer,
    ds: drugSpecsReduceres,
    drugMF:DrugMfrReducer
})

export default RootReducer