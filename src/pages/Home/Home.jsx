import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1> FREE ONLINE PHONEBOOK</h1>
        
        <button>
          <Link to="/contacts">Start</Link>
        </button>
   
    </div>
  );
};

export default Home;