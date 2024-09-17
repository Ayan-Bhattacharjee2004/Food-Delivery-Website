import React, { useEffect } from "react";
import styles from "./Orders.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { assets } from "../../assets/assets";
const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const statusHandler = async(event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className={styles.oreder}>
      <h3>Order Page</h3>
      <div className={styles.orderList}>
        {orders.map((order, index) => (
          <div key={index} className={styles.orderItem}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className={styles.orderitemfood}>
                {
                  order.items.map((item,index)=>{
                    if(index === order.items.length-1){
                      return item.name+"x"+item.quantity
                    }
                    else{
                      return item.name+"x"+item.quantity+", "
                    }
                  })
                }

              </p>
              <p className={styles.orderitemname}>{order.address.firstName+" "+order.address.lastName}</p>
              <div className={styles.orderitemaddress}>
              <p>{order.address.street+","}</p>
              <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}  </p>
              </div>
              <p className={styles.orderitemphone}>
              {order.address.phone}
            </p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery"> Out For Delivery</option>
              <option value="Deilvered">Delivered</option>
            </select>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
