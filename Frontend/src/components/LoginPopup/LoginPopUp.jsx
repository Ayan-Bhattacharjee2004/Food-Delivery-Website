import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'; // Added SweetAlert2 import
import styles from './LoginPopUp.module.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopUp = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currentState, setCurrentState] = useState("Login");
    const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
    });

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData((data) => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
      event.preventDefault();
      let newUrl = url;
      if (currentState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
      
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        // Replaced alert with SweetAlert2
        Swal.fire({
          title: 'Error', // Title of the alert
          text: response.data.message, // Message text from the response
          icon: 'error', // Icon to indicate an error
          confirmButtonText: 'OK' // Button text
        });
      }
    };

    return (
      <div className={styles.loginpopup}>
        <form onSubmit={onLogin} className={styles.loginpopupcontainer}>
          <div className={styles.loginpopuptitle}>
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className={styles.loginpopupinputs}>
            {currentState === "Login" ? <></> : <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Your name' required />}
            <input onChange={onChangeHandler} value={data.email} type="text" name="email" placeholder='Email' required />
            <input onChange={onChangeHandler} value={data.password} type="password" name="password" placeholder='Password' required />
          </div>
          <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"} </button>
          <div className={styles.loginpopupcondition}>
            <input type="checkbox" required />
            <p>By continuing I agree to the terms of use & privacy policy</p>
          </div>
          {currentState === "Login" ? <p>Create a new account?<span onClick={() => setCurrentState("Sign Up")}>Click here</span></p> : <p>Already have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p>}
        </form>
      </div>
    );
};

export default LoginPopUp;
