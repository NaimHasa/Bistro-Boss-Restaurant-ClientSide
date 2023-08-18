import { useQuery } from "@tanstack/react-query";
import { FcDeleteRow, FcPortraitMode } from "react-icons/fc";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();

    })
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })


    }
    // const handleUserDeleted = user => {

    // }
    return (
        <div className="w-full p-8">
            <h1>All Users Info</h1>
            <p>Total Users: {users.length}</p>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl text-black">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm text-red-800"><FcPortraitMode className="w-[35px]"></FcPortraitMode></button>


                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleUserDeleted(user)} className="btn btn-ghost btn-sm text-red-800"><FcDeleteRow></FcDeleteRow> Deleted</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;