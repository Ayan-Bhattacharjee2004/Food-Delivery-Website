import React from 'react'
import styles from "./Sidebar.module.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebaroptions}>
            <NavLink to='/add' className={({ isActive }) =>
    isActive ? `${styles.sidebaroption} ${styles.active}` : styles.sidebaroption
  }>
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/List' className={({ isActive }) =>
    isActive ? `${styles.sidebaroption} ${styles.active}` : styles.sidebaroption
  }>
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to ='/Orders' className={({ isActive }) =>
    isActive ? `${styles.sidebaroption} ${styles.active}` : styles.sidebaroption
  } >
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>

        </div>
      
    </div>
  )
}

export default Sidebar
