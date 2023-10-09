import React, { useState } from 'react';
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from '../../Share/Cover/Cover';
import { useParams } from 'react-router-dom';
import useMenu from '../../../hooks/useMenu';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';



const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams();
    const initialIndex=categories.indexOf(category)
    // console.log("Which Category: ",category)

    // const [tabIndex,setTabIndex]=useState(initialIndex)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menus]=useMenu();
    //console.log(menus);

    const desserts=menus.filter(item=>item.category === 'dessert')
    const soup=menus.filter(item=>item.category === 'soup')
    const salad=menus.filter(item=>item.category === 'salad')
    const pizza=menus.filter(item=>item.category === 'pizza')
    const drinks=menus.filter(item=>item.category === 'drinks')
    const offered=menus.filter(item=>item.category === 'offered')

    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <div className="tabs text-center font-bold my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
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