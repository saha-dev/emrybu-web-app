import { useContext, useState } from 'react';

import ItemContext from '../../context/ItemContext';
import ItemAmountButtons from '../../UI/ItemAmountButtons';
import ItemPrice from '../../UI/ItemPrice';
// import Feedback from '../../UI/Feedback';

import style from './Dish.module.css';
import DishModal from './DishModal';
import Photo from '../photo/Photo';

function Dish() {
    const { item } = useContext(ItemContext);
    const { title, price, description } = item;
    const [state, setState] = useState(false);

    const changeState = () => setState(!state);

    return (
        <>
            {state && <DishModal changeState={changeState} state={state} />}
            <div className={style.menuItem}>
                <div className={style.itemContent}>
                    <h3 className={style.itemTitle}>{title}</h3>
                    <ItemPrice price={price} />
                    <p className={style.itemDescription}>{description}</p>
                    {/* <Feedback /> */}
                </div>
                <div className={style.itemAppearance}>
                    <Photo changeState={changeState} state={state} modal={false} />
                    <ItemAmountButtons />
                </div>
            </div>
        </>
    );
}

export default Dish;
