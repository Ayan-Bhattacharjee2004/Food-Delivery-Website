import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import styles from "./FoodItem.module.css";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  
  const {cartItems,addToCart,removeFromCart ,url} = useContext(StoreContext);
  return (
    <div className={styles.fooditem}>
      <div className={styles.fooditemimgcontainer}>
        <img className={styles.fooditemimage} src={url+"/images/"+image} alt="" />
        {!cartItems[id]? 
          <img
            className={styles.add}
            onClick={() =>addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        : 
          <div className={styles.fooditemcounter}>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() =>addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        }
      </div>
      <div className={styles.fooditeminfo}>
        <div className={styles.fooditemnamerating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        <p className={styles.fooditemdesc}>{description}</p>
        <p className={styles.fooditemprice}>₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
