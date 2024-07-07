import { useContext } from 'react';
import Modal from '../../modal/Modal';
import ItemContext from '../../context/ItemContext';
import style from './DishModal.module.css';
import Photo from '../photo/Photo';
import ItemPrice from '../../UI/ItemPrice';
import ItemAmountButtons from '../../UI/ItemAmountButtons';

function DishModal({ changeState, state }) {
    const { item, changeAmount } = useContext(ItemContext);
    const { title, price, amount, id, composition, description } = item;
    return (
        <Modal showModalWindow={changeState}>
            <div className={style.closeModal} onClick={() => changeState()}></div>
            <h3 className={style.title}>{title}</h3>
            <Photo changeState={changeState} state={state} modal={true} />
            <div className={style.textWrapper}>
                <ItemPrice price={price} sum={price * amount} />
                <ItemAmountButtons amount={amount} changeAmount={changeAmount} id={id} />
                <div className={style.description}>
                    <p>{composition}</p>
                    <p>{description}</p>
                </div>
            </div>
        </Modal>
    );
}

export default DishModal;
