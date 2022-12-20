import { GET_PRODUCT,SEARCH_PRODUCT } from "../constant/constant";
export const getProduct=()=>{

    return{
        type:GET_PRODUCT,
    }
}

export const searchProduct=(query)=>{
    return{
        type:SEARCH_PRODUCT,
        query,
    }
}
