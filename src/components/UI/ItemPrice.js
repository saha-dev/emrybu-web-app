import style from './ItemPrice.module.css';

function ItemPrice({ price }) {
    return (
        <>
            <div className={style.priceWrapper}>
                <span>Ціна: </span>
                <span className={style.itemPrice}>{price}</span>
                <span className={style.itemCurrency}> ₴</span>
            </div>
        </>
    );
}

export default ItemPrice;
