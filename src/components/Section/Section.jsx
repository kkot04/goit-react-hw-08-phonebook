import React from 'react';

export const Section = ({ title, children }) => {
  return (
    <>
      <div>
        <p>{title}</p>
        {children}
      </div>
    </>
  );
};
