import React from 'react';
import DynamicTitle from '../../shared-component/Dynamic Title/DynamicTitle';
import Cover from '../../shared-component/Cover/Cover';
// images 
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'

import SectionTitle from '../../shared-component/SectionTitle'

import MenuItems from '../../shared-component/MenuItems/MenuItems';
import useCategory from '../../Hooks/useCategory';

const OurMenu = () => {

  const { FoodCollections, categories ,loading } = useCategory();

  return (
    <div className='space-y-12'>
      <DynamicTitle subtitle={"Our-Menu"} />

      {/* <h2 className="text-7xl">Our Menu</h2> */}

      <Cover title={"our menu"} img={menuImg} subtitle={"would you like to try a dish"} />

      {/* offered menu  */}

      <SectionTitle
        title={"today's offer"}
        subtitle={"Don't Miss"}
      />

      <MenuItems title={"offered"} 
        items={FoodCollections["offered"]}
      />

      {/* dessert menu with cover  */}

      <Cover title={"desserts"} img={dessertImg} subtitle={"would you like to try a dish"} />

      <MenuItems title={"dessert"} items={FoodCollections["dessert"]} />

      {/* pizza menu with cover  */}

      <Cover title={"pizzas"} img={pizzaImg} subtitle={"would you like to try a dish"} />

      <MenuItems title={"pizza"}  items={FoodCollections["pizza"]} />


      {/* salad menu with cover  */}

      <Cover title={"salads"} img={saladImg} subtitle={"would you like to try a dish"} />

      <MenuItems title={"salad"}  items={FoodCollections["salad"]} />

      {/* soup menu with cover  */}

      <Cover title={"soups"} img={soupImg} subtitle={"would you like to try a dish"} />

      <MenuItems title={"soup"}  items={FoodCollections["soup"]} />

    </div>
  );
};

export default OurMenu;