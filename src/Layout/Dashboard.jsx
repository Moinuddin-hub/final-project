import { NavLink, Outlet } from "react-router-dom";
import { BsCartDashFill } from "react-icons/bs";
import {  FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import UseAdmin from "../Hooks/UseAdmin";
const Dashboard = () => {
    const[cart]=useCart();
    // TODO:get  
    const [isAdmin]=UseAdmin();

    return (
        <div className="flex">
             <div className="w-64 min-h-screen bg-orange-400">
                    <ul className="menu">
                        {
                            isAdmin?
                           <>
                            <li>
                            <NavLink to='/dashboard/adminHome'>
                            <FaHome />
                                   Admin Home</NavLink>
                         </li>
                         <li>
                            <NavLink to='/dashboard/addItems'>
                                <FaUtensils></FaUtensils>
                                   Add Items</NavLink>
                         </li>
                           <li>
                               <NavLink to='/dashboard/manageItems'>
                               <FaList/>
                                   Manage Items</NavLink>
                           </li>
                           <li>
                               <NavLink to='/dashboard/manageBookings'>
                               <FaBook></FaBook>
                               Manage Bookings</NavLink>
                           </li>
                           <li>
                               <NavLink to='/dashboard/users'>
                               <FaUser />
                                   All Users</NavLink>
                           </li>
                               </>
                            
                            :
                            
                            <>
                            <li>
                         <NavLink to='/dashboard/userHome'>
                         <FaHome />
                                User Home</NavLink>
                      </li>
                      <li>
                         <NavLink to='/dashboard/addItem'>
                            <FaCalendar></FaCalendar>
                                Add Item</NavLink>
                      </li>
                      <li>
                                    <NavLink to="/dashboard/history">
                                        <FaCalendar></FaCalendar>
                                        Not History</NavLink>
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
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                                </li>
                            </>
                            
                          
                        }
                        {/* shared  */}
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

                      <li>
                         <NavLink to='/order/contact'>
                         <FaEnvelope/>
                        Contact</NavLink>
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