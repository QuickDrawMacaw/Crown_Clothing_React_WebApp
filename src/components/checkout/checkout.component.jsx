import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "./../../store/cart/cart.selector";

import CheckOutItem from "../checkout-item/checkout-item.component";

import {
  CheckOutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

import PaymentForm from "../payment-form/payment-form.component";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckOutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckOutContainer>
  );
};
export default CheckOut;
