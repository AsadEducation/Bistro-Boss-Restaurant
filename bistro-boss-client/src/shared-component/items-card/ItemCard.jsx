
const ItemCard = ({ item }) => {


    // console.log(item);

    const {
        _id,
        name,
        recipe,
        image,
        category,
        price
    } = item

    return (
        <div className="flex  items-center text-xs">
            <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-20" src={image} alt="" />

            {/* title + price + description content  */}

            <div className="px-4">

                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold">{name}-------------------------------------------</h2>
                    <p className="text-[#D99904]">${price}</p>
                </div>

                <p>{recipe}</p>
            </div>

            {/* description  */}



        </div>
    );
};

export default ItemCard;