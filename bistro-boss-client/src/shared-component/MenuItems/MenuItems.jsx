import { Link } from "react-router-dom";
import ItemCard from "../items-card/ItemCard";
import SectionTitle from "../SectionTitle";


const MenuItems = ({ items ,title }) => {

    // console.log('shared menu items',items );
    // console.log('key',key);

    if(!items){
        return <div>Loading ....</div>
    }

    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-6 w-10/12 mx-auto">
                {
                    items.map((item, index) => {
                        return <ItemCard
                            item={item}
                            key={index}
                        />
                    })
                }
            </div>
            {/* button  */}
            <div className="mx-auto w-[10%] mt-8">
                <Link to={`/our-shop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 "> Order Now </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuItems;