import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared-component/Navbar';
import Footer from '../shared-component/Footer';

const RootLayout = () => {
    return (
        <div>

           <div className='max-w-[98vw] mx-auto'> <Navbar/></div>

            <Outlet/>

            <Footer/>
            
        </div>
    );
};

export default RootLayout;