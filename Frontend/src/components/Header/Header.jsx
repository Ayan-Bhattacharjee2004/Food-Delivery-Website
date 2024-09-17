import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerContents}>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes carfted with the finest ingredients and culinary expertiese. Our mission is to satisfy your carvings and elevate your dining eperience, one delicious meal at a time. </p>
            <button>View Menu    </button>
        </div>
      
    </div>
  )
}

export default Header
