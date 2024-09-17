import React, { useCallback, useContext } from "react";
import Swal from 'sweetalert2'; // Import SweetAlert2
import styles from "./Cart.module.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext); // Added token to destructuring
  const navigate = useNavigate();

  // Function to handle placing the order
  const handlePlaceOrder = () => {
    if (!token) {
      // Show alert if the user is not logged in
      Swal.fire({
        title: 'Login Required',
        text: 'You need to log in first to place an order.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      navigate("/PlaceOrder");
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartitems}>
        <div className={styles.cartitemstitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={index}
                className={`${styles.cartitemstitle} ${styles.cartitemsitem}`}
              >
                <img src={url + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  className={styles.cross}
                >
                  x
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className={styles.cartbottom}>
        <div className={styles.carttotal}>
          <h2>Cart Totals</h2>
          <div>
            <div className={styles.carttotaldetails}>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.carttotaldetails}>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 160}</p>
            </div>
            <hr />
            <div className={styles.carttotaldetails}>
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 160}</b>
            </div>
          </div>
          <button onClick={handlePlaceOrder}>Place Order</button> {/* Updated the onClick handler */}
        </div>
        <div className={styles.cartpromocode}>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className={styles.cartpromoinput}>
              <input type="text" placeholder="PromoCode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
