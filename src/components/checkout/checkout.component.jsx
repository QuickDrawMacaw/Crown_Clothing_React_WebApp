import CheckOutItem from "../checkout-item/checkout-item.component";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const CheckOut = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div>
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};
export default CheckOut;
