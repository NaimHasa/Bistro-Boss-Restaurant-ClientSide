import { Link, Outlet } from "react-router-dom";
import { FcHome, FcCalendar, FcMoneyTransfer, FcAddRow, FcPodiumWithAudience, FcMenu, FcShop, FcContacts, FcConferenceCall, FcTodoList } from "react-icons/fc";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content uppercase">
                    {
                        isAdmin ? <>
                            <li><Link to='/deshboard/adminhome'><FcHome></FcHome> Admin Home</Link></li>
                            <li><Link to='/deshboard/addItem'><FcAddRow></FcAddRow> Add an items</Link></li>
                            <li><Link to='/deshboard/manageitems'><FcTodoList></FcTodoList> Manage items</Link></li>
                            <li><Link to='/deshboard/managebookings'><FcShop></FcShop> Manage bookings</Link></li>
                            <li><Link to='/deshboard/allusers'><FcConferenceCall></FcConferenceCall> all users</Link></li>

                        </>
                            :
                            <>
                                <li><Link to='/deshboard/home'><FcHome></FcHome> User Home </Link></li>
                                <li><Link to='/deshboard/reservation'><FcCalendar></FcCalendar> Reservation </Link></li>
                                <li><Link to='/deshboard/paymenthistory'><FcMoneyTransfer></FcMoneyTransfer> Payment History </Link></li>
                                <li><Link to='/deshboard/mycart'><FcPodiumWithAudience></FcPodiumWithAudience> My Cart </Link></li>
                            </>
                    }


                    <div className="divider"></div>
                    <li><Link to='/'> <FcHome></FcHome> Home </Link></li>
                    <li><Link to='/menu'> <FcMenu></FcMenu> Menu </Link></li>
                    <li><Link to='/deshboard/shop'><FcShop></FcShop> Shop</Link></li>
                    <li><Link to='/deshboard/contact'><FcContacts></FcContacts> Contact</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;