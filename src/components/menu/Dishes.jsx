import { useContext } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { BsFillBookmarkHeartFill, BsBookmarkHeart } from 'react-icons/bs';

import ItemContext from '../../context/ItemContext';
import ItemAmountButtons from '../../UI/ItemAmountButtons';
import ItemPrice from '../../UI/ItemPrice';
import Feedback from '../../UI/Feedback';

import style from './Dishes.module.css';

function Dishes() {
    const { item, setIsFavorite } = useContext(ItemContext);
    return (
        <div className={style.menuItem}>
            <div className={style.itemContent}>
                <h3 className={style.itemTitle}>{item.title}</h3>
                <ItemPrice price={item.price} />
                <p className={style.itemDescription}>{item.description}</p>
                <Feedback />
            </div>
            <div className={style.itemAppearance}>
                <div className={style.imageWrapper}>
                    <img src={item.imgUrl} alt="" className={style.itemImage} /> {/*onClick={() => showModalWindow({ ...item })} /> */}
                    <button className={style.buttonFavoritelist} onClick={() => setIsFavorite(item.id)}>
                        {/* {item.isFavorite ? <BsFillBookmarkHeartFill /> : <BsBookmarkHeart />} */}
                        {item.isFavorite ? <FaRegHeart /> : <FaHeart />}
                    </button>
                </div>
                <div className={style.itemButtons}>
                    <ItemAmountButtons />
                </div>
            </div>
        </div>
    );
}

export default Dishes;
