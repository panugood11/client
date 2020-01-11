import { combineReducers } from "redux";
import {reducer as reduxFrom} from "redux-form";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer,
    from : reduxFrom
})

export default rootReducer;