import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1> FREE ONLINE PHONEBOOK</h1>
      <h3>
        Contact book is an important tool that helps you stay in touch with
        important people.
      </h3>
      <h3>
        You can create your contact book quickly and easily on our website.
      </h3>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>
          <Link to="/contacts">I'm ready to start</Link>
        </Button>
        <Button>
          <a
            href="https://rozetka.com.ua/ua/mobile-phones/c80003/"
            target="_blank"
            rel="noreferrer noopener"
          >
            I don't have a phone
          </a>
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/oleh-opolonets-0416992a4/"
            target="_blank"
            rel="noreferrer noopener"
          >
            I have no friends
          </a>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Home;