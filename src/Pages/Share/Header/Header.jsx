import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import bistroLogo from '../../../assets/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {

   const {user,Logout_}=useContext(AuthContext)
    const isAdmin={}
    const cart={}

    

    const navItems=<div className='lg:flex items-center justify-center '>
    <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/practice'>Practice</NavLink ></li>
    <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/'>Home</NavLink ></li>
    <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/menu'>Our Menu</NavLink ></li>
    <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/order/salad'>Order Food</NavLink ></li>
    <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to={isAdmin?'/dashboard/adminhome':'/dashboard/userhome'}>DashBoard</NavLink ></li>
    <li>
      <Link to='/dashboard/mycart'>
      <button className="btn gap-2">
        <FaShoppingCart/>
        <div className="badge badge-secondary">{cart?.length || 0}</div>
    </button>
      </Link>
    </li>
  
    {
     user ?
     <>
       {
         user.photoURL && 
         <img  className='w-10 h-10 rounded-full' src={user.photoURL}></img>
       }
       {
         user.displayName && 
         <li className={`font-bold lg:ms-5 `}> {user.displayName} </li>
       }
       <button onClick={Logout_} className='btn btn-active btn-ghost lg:ms-5'>Logout</button> 
     </>
     :
     <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}   to='/login'><button className='btn btn-primary'>Login</button></NavLink ></li>
    }
  
   </div>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white h-28 mb-4 max-w-7xl">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
             {
                navItems
                
             }
           
            </ul>
          </div>
            <Link className="btn btn-ghost normal-case text-xl" to='/'> <img className='w-10 md:w-24 md:h-10 -mt-2 rounded-full' src={bistroLogo} /> </Link>
            <h1 className='text-xl md:text-4xl webName '>BistroBoss</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {navItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <Link><button className="btn btn-outline btn-warning">Appointment</button></Link>
        </div> */}
      </div>
    );
};

export default Header;