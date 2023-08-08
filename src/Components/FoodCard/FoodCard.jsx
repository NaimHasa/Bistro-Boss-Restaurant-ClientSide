
const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    const handleAddToCart = item => {
        console.log(item)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5 p-4">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 mt-1 px-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h6>{recipe}</h6>
                <div className="card-actions mx-auto">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 uppercase text-2xl p-3
                ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;