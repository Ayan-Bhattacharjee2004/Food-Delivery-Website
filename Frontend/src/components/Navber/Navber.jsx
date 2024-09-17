import React, {  useContext, useState } from "react";
import styles from "./Navber.module.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navber = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount ,token,setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }
  return (
    <div className={styles.Navber}>
      <img className={styles.logo} src={assets.logo} alt="" />
      <ul className={styles.navberMenu}>
       <Link to="/" onClick = {()=>setMenu("home")} className={menu==="home"?styles.active:""}>home</Link>
        <a href="#exploreMenu" onClick = {()=>setMenu("menu")} className={menu==="menu"?styles.active:""}>menu</a>
        <a href="#app-download" onClick = {()=>setMenu("mobile-App")} className={menu==="mobile-App"?styles.active:""}>mobile-App</a>
        <a href="#footer " onClick = {()=>setMenu("contact-us")} className={menu==="contact-us"?styles.active:""}>contact-us</a>
      </ul>
      <div className={styles.navberright}>
        <img src={assets.search_icon} alt="" />
        <div className={styles.navbersearchicon}>
          <Link to = "/Cart"><img src={assets.basket_icon} alt="" /></Link>  
          <div className={getTotalCartAmount()===0?"":styles.dot}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}className={styles.navberbtn}>sign in</button>:<div className={styles.navberprofile}>
          <img src={assets.profile_icon} alt="" />
          <ul className={styles.navprofiledropdown}>
            <li onClick={() =>navigate('/MyOrder')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
        
      </div>
    </div>
  );
};

export default Navber;
