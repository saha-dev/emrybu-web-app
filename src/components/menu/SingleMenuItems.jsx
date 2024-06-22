import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemContext from '../../context/ItemContext';
import { fetchDataMenuTemplate, fetchDataCategoriesTemplate } from '../../data/fetchData';
import NotFound from './NotFound';
import style from './SingleMenuItems.module.css';
import Dishes from './Dishes';

const categories = fetchDataCategoriesTemplate();
const dataDishes = fetchDataMenuTemplate();

function SingleMenuItems() {
    const { slug } = useParams();
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        const currentCategory = categories.find((item) => item.slug === slug);
        const currentDishes = !!currentCategory ? dataDishes.filter((item) => item.categoryId === currentCategory.id) : [];
        setDishes(currentDishes);
    }, [slug]);

    const changeAmount = (id, action = '+') => {
        setDishes(
            dishes.map((item) => (item.id !== id ? { ...item } : { ...item, amount: action === '+' ? ++item.amount : item.amount && --item.amount }))
        );
    };

    const changeFeedback = (id, action = '+') => {
        setDishes(
            dishes.map((item) =>
                item.id !== id ? { ...item } : { ...item, feedback: action === '+' ? ++item.feedback : item.feedback && --item.feedback }
            )
        );
    };

    const setIsFavorite = (id) => {
        setDishes(dishes.map((item) => (item.id === id ? { ...item, isFavorite: !item.isFavorite } : { ...item })));
    };

    return !dishes.length ? (
        <NotFound />
    ) : (
        <div className={style.itemsList}>
            {dishes.map((item) => (
                <ItemContext.Provider
                    value={{ item, changeAmount, changeFeedback, setIsFavorite, feedback: item.feedback, amount: item.amount, id: item.id }}
                    key={item.id}
                >
                    <Dishes />
                </ItemContext.Provider>
            ))}
        </div>
    );
}

export default SingleMenuItems;
