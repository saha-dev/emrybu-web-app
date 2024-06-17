import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import ItemAmountButtons from '../UI/ItemAmountButtons';
import Modal from './Modal';
import style from './ModalAppearance.module.css';
import ItemPrice from '../UI/ItemPrice';

function ModalAppearance({ dataModal, showModalWindow, changeWishlist, changeAmount }) {
    return (
        <Modal active={dataModal.active} showModalWindow={showModalWindow}>
            <div className={style.closeModal} onClick={() => showModalWindow()}></div>
            <h3 className={style.title}>{dataModal.title}</h3>
            <div className={style.imageWrapper}>
                <img src={dataModal.imgUrl} alt="" />
                <button className={style.buttonWishlist} onClick={() => changeWishlist(dataModal.id)}>
                    {dataModal.wishlist ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
            <ItemPrice price={dataModal.price} />
            <ItemAmountButtons amount={dataModal.amount} changeAmount={changeAmount} id={dataModal.id} />
            <div className={style.description}>
                <p>{dataModal.composition}</p>
                <p>{dataModal.description}</p>
            </div>
        </Modal>
    );
}

export default ModalAppearance;
