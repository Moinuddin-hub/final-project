import { NavLink, Outlet } from "react-router-dom";
import { BsCartDashFill } from "react-icons/bs";
import {  FaAd, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import useCart from "../Hooks/useCart";
const Dashboard = () => {
    const[cart]=useCart();
    return (
        <div className="flex">
             <div className="w-64 min-h-screen bg-orange-400">
                    <ul className="menu">
                     <li>
                         <NavLink to='/dashboard/userHome'>
                         <FaHome />
                                User Home</NavLink>
                      </li>
                      <li>
                         <NavLink to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                                Reservation</NavLink>
                      </li>
                        <li>
                            <NavLink to='/dashboard/cart'>
                            <BsCartDashFill></BsCartDashFill>
                                My Cart{(cart.length)}</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add a review</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/bookings'>
                            <FaList></FaList>
                                My Bookings</NavLink>
                        </li>
                        <div className="divider">OR</div>
                        <li>
                         <NavLink to='/'>
                         <FaHome />
                                 Home</NavLink>
                      </li>

                      <li>
                         <NavLink to='/menu'>
                         <FaSearch />
                        Menu</NavLink>
                      </li>
                    </ul>
             </div>
             <div className="flex-1 p-4">
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default Dashboard;