import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'; // Added SweetAlert2 import
import styles from "./PlaceOrder.module.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 160,
    };
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      // Replaced alert with SweetAlert2
      Swal.fire({
        title: "No Internet",
        text: "Please check your internet connection.",
        icon: "question"
      });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/Cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className={styles.placeorder}>
      <div className={styles.placeorderleft}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multifields}>
          <input
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            name="firstName"
            placeholder="First name"
          />
          <input
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            name="lastName"
            placeholder="Last name"
          />
        </div>
        <input
          onChange={onChangeHandler}
          value={data.email}
          type="text"
          name="email"
          placeholder="Email address"
        />
        <input
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          name="street"
          placeholder="Street"
        />
        <div className={styles.multifields}>
          <input
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            name="city"
            placeholder="City"
          />
          <input
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            name="state"
            placeholder="State"
          />
        </div>
        <div className={styles.multifields}>
          <input
            onChange={onChangeHandler}
            type="text"
            name="pincode"
            placeholder="Pin code"
          />
          <input
            onChange={onChangeHandler}
            value={data.country}
            name="country"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          onChange={onChangeHandler}
          value={data.phone}
          name="phone"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className={styles.placeorderright}>
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
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
