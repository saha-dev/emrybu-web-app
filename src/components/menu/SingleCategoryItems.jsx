import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ItemContext from '../../context/ItemContext';
import { fetchDataMenuTemplate } from '../../data/fetchData';
import NotFound from '../notFound/NotFound';
import style from './SingleCategoryItems.module.css';
import Dish from '../dish/Dish';

const dataDishes = fetchDataMenuTemplate();

function SingleCategoryItems() {
    const { slug } = useParams();
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        setDishes(dataDishes.filter((item) => item.categorySlug === slug));
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
        setDishes(dishes.map((item) => (item.id !== id ? { ...item } : { ...item, isFavorite: !item.isFavorite })));
    };

    return !dishes.length ? (
        <NotFound />
    ) : (
        <>
            <div className={style.itemsList}>
                {dishes.map((item) => (
                    <ItemContext.Provider
                        value={{ item, changeAmount, changeFeedback, setIsFavorite, feedback: item.feedback, amount: item.amount, id: item.id }}
                        key={item.id}
                    >
                        <Dish />
                    </ItemContext.Provider>
                ))}
            </div>
            <Outlet />
        </>
    );
}

export default SingleCategoryItems;
