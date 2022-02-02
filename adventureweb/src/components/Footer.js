import React from 'react';
import Button from './Button';
import{NavLink} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
      <>
          <div className="footer-container">
              <section className="footer-subscription">
                  <p className="footer-subscription-heading">
                      Join The Adventure Newsletter to recieve our best vaction deals
                  </p>
                  <p className="footer-subscription-text">
                      You can unscubscribe at any time
                  </p>
                  <div className="input-areas">
                      <form action="">
                          <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                        <Button buttonStyle= 'btn--outline'>Subscribe</Button>
                      </form>
                  </div>
              </section>
              <div className="footer-links">
                  <div className="footer-link-wrapper">
                      <div className="footer-link-items">
                          <h2>About Us</h2>
                          <NavLink to='/signup'>How it works</NavLink>
                          <NavLink  to ='/'>Testimonials</NavLink>
                          <NavLink  to ='/'>Careers</NavLink>
                          <NavLink  to ='/'>Investors</NavLink>
                          <NavLink  to ='/'>Terms of Services</NavLink>
                      </div>
                      <div className="footer-link-items">
                          <h2>Contact Us</h2>
                          <NavLink  to ='/'>Contact</NavLink>
                          <NavLink  to ='/'>Support</NavLink>
                          <NavLink  to ='/'>Destinations</NavLink>
                          <NavLink  to ='/'>Sponsorships</NavLink>
                      </div>
                  </div>

                  <div className="footer-link-wrapper">
                      <div className="footer-link-items">
                          <h2>Videos</h2>
                          <NavLink  to ='/'>Submit Video</NavLink>
                          <NavLink  to ='/'>Ambassador</NavLink>
                          <NavLink  to ='/'>Agency</NavLink>
                          <NavLink  to ='/'>Influencer</NavLink>
                      </div>
                      <div className="footer-link-items">
                          <h2>Social Media</h2>
                          <NavLink to='/'>Instagram</NavLink>
                          <NavLink  to ='/'>Facebook</NavLink>
                          <NavLink  to ='/'>Youtube</NavLink>
                          <NavLink  to ='/'>Twiter</NavLink>
                      </div> 
                  </div>
              </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <NavLink to='' className="social-logo">
                            ADTRVL <i className='fab fa-typo3'></i>
                        </NavLink>
                    </div>
                    <small className="website-rights">ADTRVL ©  2022 | All Right Reserved</small>
                    <div className="social-icon">
                        <NavLink className="social-icon-link facebook" to='/' target='_blank' aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </NavLink>
                        <NavLink className="social-icon-link instagram" to='/' target='_blank' aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </NavLink>
                        <NavLink className="social-icon-link youtube" to='/' target='_blank' aria-label='Youtube'>
                            <i className="fab fa-youtube"></i>
                        </NavLink>
                        <NavLink className="social-icon-link twitter" to='/' target='_blank' aria-label='twitter'>
                            <i className="fab fa-twitter"></i>
                        </NavLink>
                        <NavLink className="social-icon-link linkedin" to='/' target='_blank' aria-label='linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </NavLink>
                    </div>
                </div>
            </section>
          </div>
      </>
  );
};

export default Footer;
