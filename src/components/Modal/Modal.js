import style from './Modal.module.css';

function Modal({ active, showModalWindow, children }) {
    console.log(active);
    return (
        <div className={style['modal'] + (active ? ' ' + style['active'] : '')} onClick={() => showModalWindow()}>
            <div className={style['modalContent']} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
