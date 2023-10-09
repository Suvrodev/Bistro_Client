import React from 'react';
import Header from '../Pages/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';
import Banner from '../Pages/Share/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;