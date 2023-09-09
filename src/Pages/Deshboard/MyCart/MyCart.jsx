import { Helmet } from "react-helmet-async";
import useCarts from './../../../hooks/useCarts';
import { FcDeleteRow } from "react-icons/fc";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCarts();
    //How dose reduce works
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDeleted = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 1) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className="uppercase text-xl text-white font-bold flex justify-evenly items-center h-[60px] bg-gray-800 rounded-md">
                <h2>Total Orders: {cart.length}</h2>
                <h2>Total Price: ${total}</h2>
                <Link to="/deshboard/payment">
                    <button className="btn btn-outline btn-warning btn-sm">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{item.name}</span>
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDeleted(item)} className="btn btn-ghost btn-sm text-red-500"><FcDeleteRow></FcDeleteRow> Deleted</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;