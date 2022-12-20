import { ADD_TO_CART } from "../constant/constant";
import { EMPTY_CART } from "../constant/constant";
import { REMOVE_TO_CART } from "../constant/constant";
export const cartData = (data = [], action) => {
  console.warn("reducer cart call", action.data);
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add :", action.type);
      return[action.data,...data];
    case REMOVE_TO_CART:
      console.log("remove :", action.type);
      // data.length=data.length<=0 ? 0 :data.length-1;
      let remaining=data.filter((item)=>item.id!==action.data);
      console.warn("remain",remaining)
      return [...remaining];
    case EMPTY_CART:
      console.log("EMPTY :", action.type);
      remaining=[];
      return [...data];
    default:
      return data;
  }
};
