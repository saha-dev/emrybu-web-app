import style from './MenuItem.module.css';
import Button from './UI/Button';

function MenuItem({ item }) {
    const { title, price, description, imgUrl } = item;
    return (
        <div className={style.menuItem}>
            <div className={style.itemContent}>
                <div className={style.itemTextWrapper}>
                    <h3 className={style.itemTitle}>{title}</h3>
                    <div className={style.itemPrice}>
                        <span>{`${price} ₴`}</span>
                    </div>
                    <div className={style.itemDescription}>{description}</div>
                </div>
            </div>
            <div className={style.itemImageWrapper}>
                <img src={imgUrl} alt="" className={style.itemImage} />
                <div className={style.itemButtons}>
                    <Button btnClass="itemButtonBuy">Беру!</Button>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
