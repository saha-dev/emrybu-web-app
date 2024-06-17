import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import style from './MenuItem.module.css';
import ItemPrice from '../UI/ItemPrice';
import ItemAmountButtons from './ItemAmountButtons';

function MenuItem({ item, changeAmount, showModalWindow, changeWishlist }) {
    const { title, price, description, imgUrl, amount, id } = item;

    return (
        <div className={style.menuItem}>
            <div className={style.itemContent}>
                <h3 className={style.itemTitle}>{title}</h3>
                <ItemPrice price={price} />
                <div className={style.itemDescription}>{description}</div>
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
