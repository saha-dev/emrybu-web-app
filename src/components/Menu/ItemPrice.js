import style from './ItemPrice.module.css';

function ItemPrice({ price }) {
    return (
        <>
            <div className={style.itemPrice}>
                {price}
                <span className={style.itemCurrency}> ₴</span>
            </div>
        </>
    );
}

export default ItemPrice;
