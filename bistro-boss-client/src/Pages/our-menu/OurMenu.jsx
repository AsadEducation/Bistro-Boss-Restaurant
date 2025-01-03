import React from 'react';
import DynamicTitle from '../../shared-component/Dynamic Title/DynamicTitle';
import Cover from '../../shared-component/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'

const OurMenu = () => {
    return (
        <div>
            <DynamicTitle  subtitle={"Our-Menu"} />

            {/* <h2 className="text-7xl">Our Menu</h2> */}

            <Cover title={"our menu"} img={menuImg} subtitle={"would you like to try a dish"} />


        </div>
    );
};

export default OurMenu;