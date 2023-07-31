
const MenuItems = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" srcset="" />
            <div>
                <h3 className="uppercase">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-500">${price}</p>
        </div>
    );
};

export default MenuItems;