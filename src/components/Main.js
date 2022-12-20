// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addtocart} from "../redux/actions/Action";
import {removefromcart} from "../redux/actions/Action";
import {emptycart} from "../redux/actions/Action";
import {getProduct} from "../redux/actions/productAction";
import "./main.css";
function Main() {
  const data =useSelector((state)=>state.productData);
  console.log("main data",data);
  const dispatch=useDispatch();
  // const product={
  //   name:"joe",
  //   type:"elec",
  // }
  useEffect(()=>{
    dispatch(getProduct());
  },[]);
  return (
    <>
      <div>
        {/* <button onClick={()=>dispatch(getProduct(product))} >products</button> */}
      </div>
      <div className="products">
        {data.map((item)=>
        <div key={item.id} className='product-list'>
          <img src={item.photo} alt="img" />
          <p>{item.name}</p>
          <p>{item.brand}</p>
          <p>{item.category}</p>
          <p>{item.color}</p>
          <button onClick={()=>dispatch(addtocart(item))} >addtocart</button>
          <button onClick={()=>dispatch(removefromcart(item.id))} >removefromcart</button>
          <button onClick={()=>dispatch(emptycart())} >emptycart</button>
        </div>
        )}
      </div>
    </>
  );
}

export default Main;
