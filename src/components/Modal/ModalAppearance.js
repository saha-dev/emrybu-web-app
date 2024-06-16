import Modal from './Modal';
import style from './ModalAppearance.module.css';

function ModalAppearance({ dataModal, showModalWindow }) {
    return (
        <Modal active={dataModal.active} showModalWindow={showModalWindow}>
            <div class={style.closeModal} onClick={() => showModalWindow()}></div>
            <h3 className={style.title}>{dataModal.title}</h3>
            <div className={style.imgWrapper}>
                <img src={dataModal.imgUrl} alt="" />
            </div>
            <h3 className={style.footer}>{dataModal.price} ₴</h3>
        </Modal>
    );
}

export default ModalAppearance;
