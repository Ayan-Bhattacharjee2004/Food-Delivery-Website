import React from 'react'
import styles from './Navber.module.css'
import {assets} from '../../assets/assets'
const Navber = () => {
  return (
    <div className={styles.navber}>
        <img className ={styles.logo} src={assets.logo} alt="" />
        <img className={styles.profile}src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navber
