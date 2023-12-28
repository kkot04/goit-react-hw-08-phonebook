import React from 'react'
import { Link } from 'react-router-dom'
import s from './Home.module.css'

const Home = () => {
  return(
    <div className={s.homeDiv}>
        <h1>Online phonebook</h1>
      <h3>
        You can create your contact book quickly and easily on our website.
      </h3>
        <button>
          <Link to="/contacts">I'm ready to start</Link>
        </button>
       
      
    </div>
  )
}

export default Home
