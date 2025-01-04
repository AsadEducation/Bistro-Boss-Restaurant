import React from 'react';
import FoodCard from '../Food-Card/FoodCard';

const FoodGridItems = ({foodItems}) => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12 w-11/12 mx-auto'>
            {
                foodItems.map((foodItem,index)=>{
                    return <FoodCard key={index} foodItem={foodItem} />
                })
            }
        </div>
    );
};

export default FoodGridItems;