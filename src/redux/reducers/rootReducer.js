import { combineReducers } from "redux";
import { cartData } from "./Reducer";
import { productData } from "./productReducer";

export default combineReducers({ cartData,productData });
