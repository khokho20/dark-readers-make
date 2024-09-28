import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
      <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>lorem Ipsum is simply text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, amet suscipit! Perspiciatis officia autem possimus molestias ipsa blanditiis voluptas nemo! Delectus minus neque vero perferendis. Saepe recusandae ipsa non magnam!</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <l1>+1-234-565-7890</l1><br/>

                        <l1>contact@tomato.com</l1>
                    </ul>

         </div>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Rights Reserved.</p>
      </div>
  )
}

export default Footer
