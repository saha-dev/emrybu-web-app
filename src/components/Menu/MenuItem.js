import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import style from './MenuItem.module.css';
import ItemPrice from '../UI/ItemPrice';
import ItemAmountButtons from '../UI/ItemAmountButtons';
import Feedback from '../UI/Feedback';

function MenuItem({ item, changeAmount, showModalWindow, changeWishlist, changeFeedbackAmount }) {
    const { title, price, description, imgUrl, amount, id, feedbackAmount } = item;

    return (
        <div className={style.menuItem}>
            <div className={style.itemContent}>
                <h3 className={style.itemTitle}>{title}</h3>
                <ItemPrice price={price} />
                <p className={style.itemDescription}>{description}</p>
                <Feedback feedbackAmount={feedbackAmount} changeFeedbackAmount={changeFeedbackAmount} id={id} />
            </div>
            <div className={style.itemAppearance}>
                <div className={style.imageWrapper}>
                    <img src={imgUrl} alt="" className={style.itemImage} onClick={() => showModalWindow({ ...item })} />
                    <button className={style.buttonWishlist} onClick={() => changeWishlist(item.id)}>
                        {item.wishlist ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
                <div className={style.itemButtons}>
                    <ItemAmountButtons amount={amount} changeAmount={changeAmount} id={id} />
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
