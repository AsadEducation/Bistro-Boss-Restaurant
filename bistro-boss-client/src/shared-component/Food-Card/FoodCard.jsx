import React from 'react';

const FoodCard = ({ foodItem }) => {


    // console.log(foodItem);

    const { _id, name, recipe, image, category, price } = foodItem;

    return (
        <div className="border rounded-lg shadow-lg flex flex-col overflow-hidden bg-white ">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
                    ${price}
                </div>
            </div>

            {/* Details Section */}
            <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm mt-2">{recipe}</p>
            </div>

            {/* Add to Cart Button */}
            <div className="p-4">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default FoodCard;