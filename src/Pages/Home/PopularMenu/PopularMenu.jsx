import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import MenuItems from "../../Shared/MenuItmes/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');

    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="Form Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;