import Cover from "../../../shared-component/Cover/Cover";

import shopImg from '../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import useCategory from '../../../Hooks/useCategory'
import FoodGridItems from "../../../shared-component/FoodGrid/FoodGridItems";
import { useParams } from "react-router-dom";
import DynamicTitle from "../../../shared-component/Dynamic Title/DynamicTitle";


const FoodOrder = () => {

    const { FoodCollections, categories } = useCategory();

    const { category } = useParams();


    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        // Calculate the initial index when the category or categories change
        const initialIndex = categories.indexOf(category);
        console.log('initial index:', initialIndex);

        // Set the tab index if a valid category is found, otherwise default to 0
        setTabIndex(initialIndex !== -1 ? initialIndex : 0);
    }, [category, categories]); // Dependencies: run effect whenever `category` or `categories` changes


    return (
        <div>
            <Cover
                title={"our shop"}
                subtitle={"Wanna Try a Dish My friend ? It's awesome !!"}
                img={shopImg}
            />

            <DynamicTitle subtitle={'our-shop'}/>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList>
                    {

                        categories.map((category, index) => {
                            return <Tab key={index}>{category} </Tab>
                        })
                    }
                </TabList>

                {/* tab panels that shows data in the tab  */}

                {/* <div className="w-11/12 mx-auto"> */}
                {

                    categories.map((category, index) => {

                        // console.log('each cat from food collection', FoodCollections[category])

                        return <TabPanel key={index}>
                            <FoodGridItems

                                foodItems={FoodCollections[category]}

                            />
                        </TabPanel>
                    })
                }

                {/* </div> */}

            </Tabs>

        </div>
    );
};

export default FoodOrder;