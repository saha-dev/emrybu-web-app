import { IoBagAddOutline } from 'react-icons/io5';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import style from './MenuItem.module.css';
import Button from '../UI/Button';

function MenuItem({ item, changeAmount, showModalWindow }) {
    const { title, price, description, imgUrl, amount, id } = item;

    return (
        <div className={style.menuItem}>
            <div className={style.itemContent}>
                <h3 className={style.itemTitle}>{title}</h3>
                <div className={style.itemPrice}>
                    <span>{`${price.toFixed(2)} ₴`}</span>
                </div>
                <div className={style.itemDescription}>{description}</div>
            </div>
            <div className={style.itemAppearance}>
                <img src={imgUrl} alt="" className={style.itemImage} onClick={() => showModalWindow({ ...item })} />
                <div className={style.itemButtons}>
                    {!amount ? (
                        <Button btnclass="itemButtonBuy" onClick={changeAmount} id={id}>
                            <IoBagAddOutline className={style.iconBag} />
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
