import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import ItemAmountButtons from '../../UI/ItemAmountButtons';
import ItemPrice from '../../UI/ItemPrice';
import Feedback from '../../UI/Feedback';

import style from './Dishes.module.css';

function Dishes({ item }) {
    return (
        <div className={style.menuItem}>
            <div className={style.itemContent}>
                <h3 className={style.itemTitle}>{item.title}</h3>
                <ItemPrice price={item.price} />
                <p className={style.itemDescription}>{item.description}</p>
                <Feedback feedbackAmount={item.feedbackAmount} /> {/*changeFeedbackAmount={changeFeedbackAmount} id={item.id} /> */}
            </div>
            <div className={style.itemAppearance}>
                <div className={style.imageWrapper}>
                    <img src={item.imgUrl} alt="" className={style.itemImage} /> {/*onClick={() => showModalWindow({ ...item })} /> */}
                    <button className={style.buttonWishlist}>{item.wishlist ? <FaHeart /> : <FaRegHeart />}</button>
                    {/*onClick={() => changeWishlist(item.id)}> */}
                </div>
                <div className={style.itemButtons}>
                    <ItemAmountButtons amount={item.amount} /> {/*changeAmount={changeAmount} id={item.id} /> */}
                </div>
            </div>
        </div>
    );
}

export default Dishes;
