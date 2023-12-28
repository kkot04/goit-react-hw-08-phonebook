import React from "react";
import {  useSelector } from "react-redux";
import { NavLink , Link} from 'react-router-dom';
import { selectIsLoggedIn } from "store/auth/selectors";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import UserMenu from "components/UserMenu/UserMenu";

const Header = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);


    return (
    <Box>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{ flexGrow: 1 }}
        >
          <Link to="/">Phonebook</Link>
        </Typography>

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
      </Toolbar>
    </AppBar>
  </Box>
);


}

export default Header