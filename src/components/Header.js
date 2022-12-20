import cart from "./cart.png";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../redux/actions/productAction";
import "./header.css";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch=useDispatch();
  console.log("redux in header", result);
  return (
    <div className="header">
      <Link to="/">
        <h2>Eccomerce</h2>
      </Link>
      <div className="search-box">
        <input type="text" placeholder="Search Product" onChange={(e)=>dispatch(searchProduct(e.target.value))} />
      </div>
      <Link to="/cart">
        <div className="cart">
          <span>{result.length}</span>
          <img src={cart} alt="img" />
        </div>
      </Link>
    </div>
  );
};
export default Header;
