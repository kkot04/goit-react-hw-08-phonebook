import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'store/auth/selectors';
import { logoutThunk } from 'store/auth/operation';

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h6" color="inherit" component="h6">
        {user && <p>Welcome to the club, {user}!</p>}
      </Typography>
      <Button
        onClick={() => dispatch(logoutThunk())}
        variant="contained"
        color="error"
      >
        EXIT
      </Button>
    </>
  );
};

export default UserMenu;