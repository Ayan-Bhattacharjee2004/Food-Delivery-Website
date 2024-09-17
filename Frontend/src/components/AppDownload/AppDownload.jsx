import React from 'react'
import styles from './AppDownload.module.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div>
      <div className={styles.AppDownloadapp} id='app-download'>
        <p>For Better Experience Download<br/>Zomato App</p>
        <div className={styles.appdownloadplatforms}>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
