import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='App-nav'>
        <ul className='links'>
        <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control" placeholder='Want to learn...' />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary" data-mdb-ripple-init>
    <i class="fas fa-search"></i>
  </button>
</div>
            <Link to ='/'><li>Home</li></Link>
            <Link to ='/About'><li>About</li></Link>
            <Link to ='/Contact'><li>Contact</li></Link>
            <Link to ='/Courses'><li>Courses</li></Link>
            <Link to ='/Signing'><li>Signing</li></Link>


        </ul>
      </div>
    </div>
  )
}

export default NavBar
