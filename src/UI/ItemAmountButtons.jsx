import { useContext } from 'react';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';

import ItemContext from '../context/ItemContext';
import style from './ItemAmountButtons.module.css';
import Button from './Button';

function ItemAmountButtons() {
    const { changeAmount, id, amount } = useContext(ItemContext);
    return (
        <div className={style.itemButtons}>
            {!amount ? (
                <Button btnclass="itemButtonBuy" onClick={() => changeAmount(id)}>
                    <TbShoppingBagPlus className={style.iconBag} />
                    Беру!
                </Button>
            ) : (
                <>
                    <Button btnclass="itemMinus" onClick={() => changeAmount(id, '-')}>
                        <TiMinus />
                    </Button>
                    <span className={style.itemAmоunt}>{amount}</span>
                    <Button btnclass="itemPlus" onClick={() => changeAmount(id)}>
                        <TiPlus />
                    </Button>
                </>
            )}
        </div>
    );
}

export default ItemAmountButtons;
