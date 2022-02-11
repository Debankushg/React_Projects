import React, {useState}from 'react';
import {NavLink} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Sidebar} from './Sidebar';
import './Navbar.css';
import {IconContext} from 'react-icons';
// import styled from 'styled-components';



const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar =() => setSidebar(!sidebar);

  return (
      <>
          <div className="navbar">
              <NavLink to='#' className='menu-bars'>
                  <FaIcons.FaBars onClick={showSidebar} />
              </NavLink>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                      <NavLink to='#' className='menu-bars'>
                      <AiIcons.AiOutlineClose />
                      </NavLink>
                </li>
                {Sidebar.map((item,index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
              </ul>
          </nav>
      </>
  );
};

export default Navbar;
