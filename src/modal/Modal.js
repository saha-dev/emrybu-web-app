import style from './Modal.module.css';

function Modal({ showModalWindow, children }) {
    return (
        <div className={style.modal} onClick={() => showModalWindow()}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
