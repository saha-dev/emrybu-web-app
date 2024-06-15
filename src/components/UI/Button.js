import style from './Button.module.css';
function Button(props) {
    const { children, btnclass } = props;
    return (
        <button {...props} className={style[btnclass]}>
            {children}
        </button>
    );
}

export default Button;
