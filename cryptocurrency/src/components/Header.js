import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css';
// import {useHistory} from 'react-router-dom'


const Header = () => {

 



  return (
     <>
    <nav className='navbar' >
        <div className="navbar-container">
        <NavLink to="/" className='navbar-logo'  >
            Cryptocurrency App <i className="fab fa-typo3"></i>
        </NavLink>
        
          </div>
    </nav>
    </>
  )
}

export default Header