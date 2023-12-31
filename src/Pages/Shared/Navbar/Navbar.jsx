import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const [isAdmin] = useAdmin();
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const navItems = [
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Our Menu</Link></li>
            <li><Link to='/order/salad'>Order</Link></li>
            {
                isAdmin ? <li><Link to='/deshboard/adminhome'>Deshboard</Link></li> :
                    <li><Link to='/deshboard/userhome'>Deshboard</Link></li>

            }
            <li><a>Contact Us</a></li>
            <li><a>Our Shop</a></li>



            {
                user ?
                    <>
                        <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                    </>
                    :
                    <> <li><Link to='/login'>Login</Link></li></>
            }
        </>
    ];

    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-slate-400 max-w-7xl mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sms font-bold uppercase dropdown-content mt-3 z-[1] p-2  shado rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="text-white font-bold uppercase">
                    Bistro Boss
                    <br />
                    restaurant

                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1 uppercase font-bold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <li><Link to='/deshboard/mycart'>
                    <button className="btn">
                        <AiOutlineShoppingCart ></AiOutlineShoppingCart>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </Link></li>
            </div>
        </div>
    );
};

export default Navbar;