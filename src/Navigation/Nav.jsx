import React from 'react';
import './Nav.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

function Nav({handleInput}) {
  return (
    <nav> 
      <div className="nav-container">
        <input
        onChange={handleInput}
          type="text"
          className="search-input"
          placeholder="Enter Your search Shoes"
       
        />
      </div>
      <div className="profile-container">
        <a href="#" className='nav-icons'><FiHeart /> </a>
        <a href="#" className='nav-icons'><AiOutlineUser /></a>
        <a href="#" className='nav-icons'><AiOutlineShoppingCart /></a>
      
  
        <span>
          
        </span>
      </div>
    </nav>
  );
}

export default Nav;
