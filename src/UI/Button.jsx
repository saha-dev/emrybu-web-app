import style from './Button.module.css';
function Button(props) {
    const { children, btnclass, onClick, id, action = '+' } = props;
    return (
        <button {...props} className={style[btnclass]} onClick={() => onClick(id, action)}>
            {children}
        </button>
    );
}

export default Button;
