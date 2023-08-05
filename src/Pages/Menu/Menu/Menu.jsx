import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTittle/SectionTitle';
import MenuCatagory from '../MenuCatagory/MenuCatagory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {
                <Cover img={menuImg} title="Our Menu"></Cover>
            }

            {/*Main cover*/}

            <SectionTitle subHeading="Today Offers" heading="Don't Miss"></SectionTitle>
            <MenuCatagory items={offered}></MenuCatagory>
            {/* Offerd menu Items */}
            <br />

            <MenuCatagory
                items={desserts}
                title="dessert"
                img={dessertImg}

            >

            </MenuCatagory>
            <MenuCatagory
                items={pizza}
                title="pizza"
                img={pizzaImg}

            >

            </MenuCatagory>
            <MenuCatagory
                items={salad}
                title="salad"
                img={saladImg}

            >

            </MenuCatagory>
            <MenuCatagory
                items={soup}
                title="soup"
                img={soupImg}

            >

            </MenuCatagory>

        </div>
    );
};

export default Menu;