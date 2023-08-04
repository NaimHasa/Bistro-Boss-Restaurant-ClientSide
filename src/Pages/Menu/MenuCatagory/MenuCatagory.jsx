
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItmes/MenuItems";

const MenuCatagory = ({ items, title, img }) => {
    return (
        <div>
            {
                title && <Cover img={img} title={title}></Cover>
            }

            <div className="grid md:grid-cols-2 gap-12 p-16">

                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }

            </div>


        </div>
    );
};

export default MenuCatagory;