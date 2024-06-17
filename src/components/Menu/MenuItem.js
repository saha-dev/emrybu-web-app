import { TbShoppingBagPlus } from 'react-icons/tb';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import style from './MenuItem.module.css';
import Button from '../UI/Button';
import ItemPrice from './ItemPrice';

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
                    {!amount ? (
                        <Button btnclass="itemButtonBuy" onClick={changeAmount} id={id}>
                            <TbShoppingBagPlus className={style.iconBag} />
                            Беру!
                        </Button>
                    ) : (
                        <>
                            <Button btnclass="itemMinus" onClick={changeAmount} action="-" id={id}>
                                <TiMinus />
                            </Button>
                            <span className={style.itemAmоunt}>{amount}</span>
                            <Button btnclass="itemPlus" onClick={changeAmount} id={id}>
                                <TiPlus />
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
