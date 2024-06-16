import style from './Modal.module.css';

function Modal({ active, showModalWindow, children }) {
    return (
        <div className={style['modal'] + (active ? ' ' + style['active'] : '')} onClick={() => showModalWindow()}>
            <div className={style['modalContent'] + (active ? ' ' + style['active'] : '')} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
