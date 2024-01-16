import React from "react";
import {  useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from "store/auth/selectors";
import UserMenu from "components/UserMenu/UserMenu";

const Header = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);


    return (
    <header>
     <nav style={{alignItems: 'center' }}>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

          {!isLoggedIn && (
            <>
              <NavLink to="/register">Sign Up</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}

          {isLoggedIn && <UserMenu />}
        </nav>
     
  </header>
);


}

export default Header