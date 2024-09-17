import React from 'react'
import styles from './Footer.module.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className={styles.footer} id='footer'>
        <div className={styles.footercontent}>
            <div className={styles.footercontentleft}>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam repellat quo at ab. Iusto error obcaecati similique corporis unde ipsa maiores nemo itaque tempora. Nam tempore sapiente vel dolorum ea.</p>
                <div className={styles.footersocialicons}>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon } alt="" />
                </div>
            </div>
            <div className={styles.footercontentcenter}>
                <h2>COMPANY</h2>
                <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Delivery</li>
                   <li>Privacy policy</li> 
                </ul>
            </div>
            <div className={styles.footercontentright}>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 2393-293-2233</li>
                    <li>contact@Foodify.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className={styles.footercopyright}>
            Copyright 2024 © Foodify.com - All Right Reserved.
        </p>
      
    </div>
  )
}

export default Footer
