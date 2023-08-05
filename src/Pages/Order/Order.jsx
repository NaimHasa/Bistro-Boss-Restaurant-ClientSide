import { useState } from 'react';
import orderCover from '../../assets/shop/order.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';


const Order = () => {
    const [order, setOrder] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Cover
                img={orderCover}
                title="Order"
            ></Cover>

            <div className='p-16 text-center font-semibold uppercase'>
                <Tabs selectedIndex={order} onSelect={(index) => setOrder(index)}>
                    <TabList classID='' >
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>

                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;