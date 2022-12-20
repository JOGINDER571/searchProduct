import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Cart() {
  const cartList = useSelector((state) => state.cartData);
  let amount=cartList.length && cartList.map((item)=>item.price).reduce((prev,next)=>prev+next);
  return (
    <>
      <div className="cart-page">
        <Link to="/">
          <h2>product list</h2>
        </Link>
        <h2>Cart</h2>
        <div className="cart-compo">
          <table>
            <tr>
              <th>name</th>
              <th>color</th>
              <th>brand</th>
              <th>category</th>
              <th>price</th>
            </tr>
            {cartList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </table>
          <div className="price-details">
            <div className="adjust-price">
              <span>Amount :</span>
              <span>{amount}</span>
            </div>
            <div className="adjust-price">
              <span>Discount :</span>
              <span>{amount/10}</span>
            </div>
            <div className="adjust-price">
              <span>Total :</span>
              <span>{amount-(amount/10)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
