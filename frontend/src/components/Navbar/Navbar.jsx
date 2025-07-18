import React, { use, useContext,useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount,token,setToken }= useContext(StoreContext);

    const navigate =useNavigate();

    const logout=()=>{
        // remove the token from the local storage and set it to empty string in the context to logout the user
       
        localStorage.removeItem("token");
        setToken("");
         // and redirect to the home page
         navigate("/");

    }
    
  return (
    <div className='navbar'>
        <Link to='/'>
        <img src={assets.logo} alt="" className='logo'/></Link>
        
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")}  className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
            :<div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')} ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    
                </ul>
        </div>     
        }
   </div> 
    </div>
  )
}

export default Navbar
