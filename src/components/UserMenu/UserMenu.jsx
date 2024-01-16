import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'store/auth/selectors';
import { logoutThunk } from 'store/auth/operation';

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <alert variant="h6" color="inherit" component="h6">
        {user && <p>Welcome, {user}!</p>}
      </alert>
      <button
        onClick={() => dispatch(logoutThunk())}
        variant="contained"
        color="error"
      >
        EXIT
      </button>
    </>
  );
};

export default UserMenu;