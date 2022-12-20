import { ADD_TO_CART } from "../constant/constant";
import { REMOVE_TO_CART } from "../constant/constant";
import { EMPTY_CART } from "../constant/constant";
export const addtocart=(data)=>{
    console.log("action called",data);
    return{
        type:ADD_TO_CART,
        data
    }
}
export const removefromcart=(data)=>{
    console.log("action called",data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}
export const emptycart=()=>{
    console.log("action called");
    return{
        type:EMPTY_CART,
    }
}