import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';
// passing url as props to fetch data from backend instead of const url = "http://localhost:4000"
const List = ({url}) => {
  // const url = "https://food-deliver-app-xb9t.onrender.com/"
  const [list,setList] = useState([]);

     const fetchList = async () => {
          const response = await axios.get(url+"/api/food/list");
          setList(response.data.data);
          if(response.data.success){
            // if data is fetched successfully then set the data to list
            setList(response.data.data);
          }
          else{
            toast.error("Error");
      
          }
      }

      /* 
       //to fetch data
        const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data)
    if(response.data.success){
      // if data is fetched successfully then set the data to list
      setList(response.data.data);
    }
    else{
      toast.error("Error");

    }
  }*/
 

  // to remove food item

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList(); //fetch the list again after removing the food item
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }
  }
  useEffect(()=>{
    fetchList(); //run this fun when page is loaded

  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {/*  */}
        {list.map((item,index)=>{
          return(
            <div className="list-table-format" key={index}>
              {/* <img src={`${url}/images/`+item.image} alt="" /> */}
              <img src={item.image} alt={item.name} />

              

              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              
            </div>

          )

        })}
      </div>
      
    </div>
  )
}

export default List
