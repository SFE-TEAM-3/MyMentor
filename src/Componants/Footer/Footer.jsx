import React from 'react'
import "./footer.css"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fac from '@iconscout/react-unicons/icons/uil-facebook'
import Linkd from '@iconscout/react-unicons/icons/uil-linkedin'
import Logo from "../../assets/images/logo(4).png"
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'


function Footer() {
  return (
      <div className='Footer'>
          
          <div className="footer-container">
              
              <div className="footer-logo">
              <img src={Logo} alt="" />
              </div> {/*end footer-logo*/}
              <div className="footer-med">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, voluptatum quae.</p>
                  <ul className='ul-footer'>
                      <li>overview</li>
                      <li>becom a mentor</li>
                      <li>become a mentee</li>
                      <li>VIP mentors</li>
                      <li>privecy</li>
                  </ul>
              </div> {/**end footer-med */}
              
              <div className="footer-btm">
                  
                  <div className="footer-btm-txt">
                      @ 2023 all rights reserved
                  </div> {/**end footer-btm-txt */}
                  <div className="footer-btm-icons">
                      <Fac className="icon" />
                      <Twitter  className="icon" />
                      <Insta  className="icon" />
                      <Linkd  className="icon" />
                  </div> {/**end footer-btm-icons */}

              </div> {/**end footer-btm */}
              
          </div> {/**end footer-container */}
      
      </div> /** end Footer */
  )
}

export default Footer