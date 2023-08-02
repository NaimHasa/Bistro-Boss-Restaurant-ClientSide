import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import '../Featured/Featured.css';
const Featured = () => {
    return (
        <div className="featuredThem text-black font-semibold bg-fixed">
            <SectionTitle
                heading="Check it Out"
                subHeading="Form our menu"
            ></SectionTitle>
            <div className="flex md:space-x-10 justify-center items-center mt-10 pb-7 p-8 mb-5 bg-slate- ">
                <div>
                    <img src={featuredImg} alt="" srcset="" />
                </div>
                <div>
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where Can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laborum non at nam rerum dolorem velit dolorum dicta saepe! Ex ducimus doloribus tenetur quibusdam tempore officia facere facilis accusamus perferendis, voluptatem omnis error eveniet? Reprehenderit ipsum ex ipsa. Natus dicta impedit quam atque itaque eveniet fuga sint dolorem tenetur odit.</p>
                    <button className="btn btn-outline border-0 border-b-4 uppercase text-2xl mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;