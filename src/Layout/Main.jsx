import React from 'react';
import Header from '../Pages/Share/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';
import Banner from '../Pages/Share/Banner/Banner';

const Main = () => {
    const location=useLocation()
    const path=location.pathname;
    const noHeaderFooter=path.includes('/login') || path.includes('/signup')
    // console.log("No Header Footer: ",noHeaderFooter);
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;