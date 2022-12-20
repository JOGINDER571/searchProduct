import { SET_PRODUCT } from "../constant/constant";
export const productData = (data = [], action) => {
  console.warn("reducer p call", action.data);
  switch (action.type) {
    case SET_PRODUCT:
      console.log("add :", action.type);
      return[...action.data];
    default:
      return data;
  }
};