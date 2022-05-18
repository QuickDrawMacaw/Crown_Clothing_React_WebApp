import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "./../../store/cart/cart.selector";
import { addItemToCart } from "./../../store/cart/cart.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, Footer } from "./product-card.styles";
import CartItem from "./../cart-item/cart-item.component";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
