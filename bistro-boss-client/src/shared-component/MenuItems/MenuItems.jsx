import ItemCard from "../items-card/ItemCard";
import SectionTitle from "../SectionTitle";


const MenuItems = ({items}) => {

    // console.log('shared menu items',items );

    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            {
                items.map((item,index)=>{
                    return <ItemCard
                    item={item}
                    key={index}
                    />
                })
            }
        </div>
    );
};

export default MenuItems;