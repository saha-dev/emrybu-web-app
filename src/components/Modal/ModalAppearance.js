import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import Modal from './Modal';
import style from './ModalAppearance.module.css';

function ModalAppearance({ dataModal, showModalWindow, changeWishlist }) {
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
            <h3 className={style.footer}>{dataModal.price} ₴</h3>
        </Modal>
    );
}

export default ModalAppearance;
