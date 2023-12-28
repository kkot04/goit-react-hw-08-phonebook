import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>page is not found</h2>
      <Link to="/">Go to home</Link>
    </>
  );
};

export default NotFound;