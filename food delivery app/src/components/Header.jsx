import { useEffect, useState } from 'react';
import { CON_LOGO } from '../utils/constants';
import {Link} from "react-router";
import useOnlineStatus from '../utils/showOnlinestatus';
const Header = () => {
    const [btnnamereact,setbtnNameReact]=useState("Login");
    console.log("header render");
    useEffect(()=>{
        console.log("useEffect");
    },[btnnamereact]);
    return (
        <div className="flex  h-20 justify-between bg-amber-100">
            <div className="logo-container">
                <img
                    className="w-36"
                    src={CON_LOGO}></img>
            </div>
            <div className="hidden lg:flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4 font-medium text-gray-800 hover:text-orange-600 transition-colors">Online Status:{useOnlineStatus()?"✅":"🔴"}</li>
                    <li className="px-4 font-medium text-gray-800 hover:text-orange-600 transition-colors"><Link to='/'>Home</Link></li>
                    <li className="px-4 font-medium text-gray-800 hover:text-orange-600 transition-colors"><Link to='/contact'>Contact </Link></li>
                    <li className="px-4 font-medium text-gray-800 hover:text-orange-600 transition-colors"><Link to='/about'>About Us</Link></li>
                    <li className="px-4 font-medium text-gray-800 hover:text-orange-600 transition-colors"><Link to='/grocery'>Grocery</Link></li>
                    <li className="px-4 font-medium text-gray-800 hover:text-orange-600 transition-colors"><img className="cart" src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-64.png" width={30}></img></li>
                    <button className='px-2' onClick={() =>{ btnnamereact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");}}>{btnnamereact}</button>
                </ul>
            </div>
      < div
      className={`max-h-screen lg:hidden overflow-hidden transition-all duration-300 bg-white shadow-md`}
    >
      <nav className="flex flex-col px-4 pb-4 space-y-3">
        <Link to="/" className="py-2 border-b border-gray-100 font-medium">
          Home
        </Link>
        <Link to="/contact" className="py-2 border-b border-gray-100 font-medium">
          Contact
        </Link>
        <Link to="/about" className="py-2 border-b border-gray-100 font-medium">
          About Us
        </Link>
        <Link to="/grocery" className="py-2 border-b border-gray-100 font-medium">
          Grocery
        </Link>
        <Link to="/cart" className="py-2 font-medium flex items-center">

          Cart
        </Link>
      </nav>
    </div>
    </div>
    );
};
export default Header;