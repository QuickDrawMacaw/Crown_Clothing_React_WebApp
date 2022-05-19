import { Fragment } from "react";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../cart-icon/cart-icon.components";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutStart } from "../../../store/user/user.action";

import { selectCurrentUser } from "./../../../store/user/user.selector";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {" "}
              Sign Out{" "}
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign-In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
