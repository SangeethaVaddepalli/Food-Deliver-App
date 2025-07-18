import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';
const MyOrders = () => {
    const {url,token}= useContext(StoreContext);
    const [data,setData]= useState([]);

    // saving user order data in setdata
    const fetchOrders = async () =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
        console.log(response.data.data);
        
    }
    useEffect(() => {
      if (token){
        fetchOrders();
      }
    
   
    }, [token])
    
    

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((orders,index)=>{
          return(
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="parcel"  />
              <p>{orders.items.map((item,index)=>{
                if(index=== orders.items.length-1){
                  return item.name+" x "+item.quantity

                }
                else{
                  return item.name + " x "+item.quantity+" , "
                }

              })}</p>
              <p>${orders.amount}.00</p>
              <p>Items: {orders.items.length}</p>
              <p><span>&#x25cf;</span> <b>{orders.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
