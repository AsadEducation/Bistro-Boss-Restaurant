import { useEffect, useState } from "react";


const useMenu = (category) => {


    const passedCategory = category;

    // console.log(passedCategory);

    const [items, setItems] = useState([]);

    const [loading,setLoading]= useState(true);

    useEffect(() => {

        fetch('/food-menus/Menu.json')
            .then(res => res.json())
            .then(data => {

                const popular = data.filter((each) => each.category === passedCategory);
                // console.log(popular);
                setItems(popular);
                setLoading(false);
            })
    }, [])

    return [items,loading];

};

export default useMenu;