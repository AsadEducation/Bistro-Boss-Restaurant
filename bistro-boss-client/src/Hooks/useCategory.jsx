import useMenu from "./useMenu";


const useCategory = () => {

    const [items, loading] = useMenu();

    const categories = [];
    const FoodCollections = {};

    items.forEach((item) => {
        if(!categories.includes(item.category)){
            categories.push(item.category);
        }
    })

    categories.forEach((category) => {
        FoodCollections[category] = items.filter((item) => item.category === category)
    })

    return { FoodCollections, categories ,loading };


};

export default useCategory;