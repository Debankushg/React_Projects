import React,{useState} from 'react';
import './Nav.css';
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu }  from "react-icons/gi";





const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main_nav">
                <div className="logo">
                    <h2>
                    <span>D</span>ev
                    <span>K</span>ush
                    </h2>
                </div>

                <div className={showMediaIcons ? "menu_link mobile_menu_link" :"menu_link" }>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="social_media">
                    <ul className="social_media_desktop">
                        <li>
                        <a href="#" target="_deb"> <FaFacebookSquare className='facebook'/></a>
                        </li>
                        <li>
                        <a href="#" target="_deb"> <FaInstagramSquare className='Instagram'/></a>
                        </li>
                        <li>
                        <a href="#" target="_deb"> <FaYoutubeSquare className='youtube' /></a>
                        </li>
                    </ul>

                    {/* hero Section */}

                    <div className="hamburger_menu">

                        <a href="#" onClick= {() => setShowMediaIcons(!showMediaIcons)}> <GiHamburgerMenu /></a>
                    </div>


                </div>
            </nav>

            <section className='hero_section'>
            <p>Welcome to </p>
            <h1>DevKush</h1>

            </section>
        </>


    )
}

export default Navbar;
