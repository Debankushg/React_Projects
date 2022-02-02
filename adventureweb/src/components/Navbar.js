import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';


const Navbar = () => {
 const[click,setClick] = useState(false);
  const [button,setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

 const showButton =() => {
   if(window.innerWidth <= 960){
     setButton(false);
   }else{
     setButton(true);
   }
 };

 useEffect (() =>{
   showButton();
 } , []);
 
 window.addEventListener('resize' ,showButton);

 const changeBackground = () =>{
   if(window.scrollY >= 80){
     setNavbar(true);
   } else{
     setNavbar(false);
   }
 };
 window.addEventListener('scroll' , changeBackground);

  return (
  <>
<nav className={navbar ? 'navbar active' : 'navbar'}>
    <div className="navbar-container">
    <NavLink to="/" className='navbar-logo' onClick ={closeMobileMenu}>
        ADTRVL <i className="fab fa-typo3"></i>
    </NavLink>
    <div className="menu-icon" onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <NavLink to='/' className= 'nav-links' onClick={closeMobileMenu} >
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/services' className= 'nav-links' onClick={closeMobileMenu} >
          Services
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/products' className= 'nav-links' onClick={closeMobileMenu} >
          Products
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/signup' className= 'nav-links-mobile' onClick={closeMobileMenu} >
          SIGN UP
        </NavLink>
      </li>
      
    </ul>
    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
    </div>
</nav>
  </>

  )
};

export default Navbar;
