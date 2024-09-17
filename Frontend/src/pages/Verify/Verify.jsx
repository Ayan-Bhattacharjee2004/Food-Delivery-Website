import React, { useContext, useEffect } from 'react'
import styles from './Verify.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';

const Verify = () => {
  const [searchParams,setSearchPrams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log("success",success,orderId)
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();
  const VerifyPayment = async () =>{
    const response = await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success){
      navigate("/MyOrder");
    }
    else{
      navigate("/")
    }

  }
  useEffect(()=>{
    VerifyPayment();
  },[])
  return (
    <div className={styles.verify}>
      <div className={styles.spinner}>

      </div>
      
    </div>
  )
}

export default Verify
