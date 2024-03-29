import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
  
  const [cart]=useCart()
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  


  const [isAdmin,isAdminLoading]=useAdmin()
  // console.log("isAdmin from Dashboard:",isAdmin);
  
  // let checkAdmin=false
  // if(isAdmin){
  //   checkAdmin=isAdmin.admin
  //   console.log("Check Admin:",checkAdmin);
  // }

 

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
        <div className='w-full'>
          <label htmlFor="my-drawer-2" className="text-2xl drawer-button lg:hidden"><FaBars/></label>
        </div>

          {/* Page content here */}
          <Outlet></Outlet>
          {/* Page content here */}
        
        </div> 
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-black">
            {/* Sidebar content here */}
            {
            isAdmin?.admin ? <>
              <li className='text-center font-bold text-xl'>Admin Pannel</li>
              <li><NavLink to='/dashboard/adminhome'> <FaHome/> Admin Home  </NavLink></li>
              <li ><NavLink to='/dashboard/additem'> <FaUtensils/> Add an Item </NavLink></li>
              <li><NavLink to='/dashboard/manageitems'> <FaWallet/> Manage Items  </NavLink></li>
              <li><NavLink to='/dashboard/history'> <FaBook/> Manage Booking  </NavLink></li>
              <li><NavLink to='/dashboard/allusers'> <FaUsers/> All Users  </NavLink></li>
            </>
            :
            <>
                <li className='text-center font-bold text-xl'>User Pannel</li>
                <li><NavLink to='/dashboard/userhome'> <FaHome/> User Home  </NavLink></li>
                <li ><NavLink to='/dashboard/reservations'> <FaCalendarAlt/> Reservations </NavLink></li>
                <li><NavLink to='/dashboard/history'> <FaWallet/> Payment History  </NavLink></li>
                <li className=""><NavLink to='/dashboard/mycart'> <FaShoppingCart/> My Cart<span className="badge badge-secondary">{cart?.length || 0}</span></NavLink> </li>
            </>
          }
            <div className="divider"></div>
            <li> <NavLink to='/'><FaHome/> Home </NavLink> </li>
            <li> <NavLink to='/menu'>Our Menu </NavLink> </li>
            <li> <NavLink to='/order/salad'> Order Food </NavLink> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;