import style from './ItemPrice.module.css';

function ItemPrice({ price, sum = 0 }) {
    return (
        <>
            <div className={style.priceWrapper}>
                <span>Ціна: </span>
                <span className={style.itemPrice}>{price}</span>
                <span className={style.itemCurrency}> ₴</span>
                {!!sum && (
                    <>
                        <span className={style.sum}>{sum}</span>
                        <span className={style.itemCurrency}> ₴</span>
                    </>
                )}
            </div>
        </>
    );
}

export default ItemPrice;
