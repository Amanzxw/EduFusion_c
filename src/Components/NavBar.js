

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout'; // Adjust the import path based on your project structure

const NavBar = () => {
  const { authUser } = useAuth(); // Destructure authUser from useAuth()

  return (
    <div className='App-nav'>
      <ul className='links'>
        {/* Search Input Field */}
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <input type="search" id="form1" className="form-control" placeholder='Want to learn...' />
            <label className="form-label" htmlFor="form1">Search</label>
          </div>
          <button type="button" className="btn btn-primary" data-mdb-ripple-init>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/courses'>Courses</Link></li>

        {/* Conditional Rendering based on authUser */}
        {authUser ? (
          <Logout />
        ) : (
          <li><Link to='/signing'>Sign In</Link></li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
