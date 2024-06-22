import style from './Button.module.css';
function Button(props) {
    const { children, btnclass, onClick } = props;
    return (
        <button {...props} className={style[btnclass]} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
