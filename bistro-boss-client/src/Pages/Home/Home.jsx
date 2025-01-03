import React from 'react';
import Banner from './Banner';
import Category from './Catergory/Category';
import MenuItems from '../../shared-component/MenuItems/MenuItems';
import PopularMenu from './popular-menu-items/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import DynamicTitle from '../../shared-component/Dynamic Title/DynamicTitle';

const Home = () => {


    return (
        <div className='space-y-24'>

            <DynamicTitle subtitle={"Home"} />
            
           <div> <Banner /></div>

           <div className='w-[80%] mx-auto'><Category/></div>

           <div> <PopularMenu/> </div>

           <div><Featured/></div>

           <div><Testimonials/></div>

        </div>
    );
};

export default Home;