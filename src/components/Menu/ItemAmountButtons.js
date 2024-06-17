import { TbShoppingBagPlus } from 'react-icons/tb';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';

import style from './ItemAmountButtons.module.css';
import Button from '../UI/Button';

function ItemAmountButtons({ amount, changeAmount, id }) {
    return (
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
    );
}

export default ItemAmountButtons;
