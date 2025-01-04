import { useEffect, useState } from "react";
import MenuItems from "../../../shared-component/MenuItems/MenuItems";
import SectionTitle from "../../../shared-component/SectionTitle";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [items, loading] = useMenu("popular");


    return (
        <section>
            <SectionTitle
                title={"from our menu"}
                subtitle={"check it out "}
            />

            <div className="my-8">
                <MenuItems
                    items={items}
                />
            </div>
        </section>
    );
};

export default PopularMenu;