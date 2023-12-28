import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../store/auth/selectors.js';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }
  return children;
};