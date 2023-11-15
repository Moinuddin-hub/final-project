import { NavLink, Outlet } from "react-router-dom";
import { BsCartDashFill } from "react-icons/bs";
import {  FaAd, FaCalendar, FaHome, FaList } from "react-icons/fa";
const Dashboard = () => {
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
                                My Cart</NavLink>
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
                    </ul>
             </div>
             <div className="flex-1">
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default Dashboard;