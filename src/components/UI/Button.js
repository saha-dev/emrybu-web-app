import style from './Button.module.css';
function Button(props) {
    const { children, btnClass } = props;
    return (
        <button {...props} className={style[btnClass]}>
            {children}
        </button>
    );
}

export default Button;
