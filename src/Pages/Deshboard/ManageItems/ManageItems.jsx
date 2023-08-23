import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div className="w-full">
            <SectionTitle heading="Hurry Up!!" subHeading="MANAGE ALL ITEMS"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="text-md font-bold text-black uppercase">
                            <th>

                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Deleted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {
                                        item.price
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageItems;