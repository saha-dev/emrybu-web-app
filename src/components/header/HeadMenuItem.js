import style from './HeadMenuItem.module.css';

function HeadMenuItem({ item, activateButton }) {
    return (
        // <a href="/" className={style.headMenuItem + item.active ? ' ' + style.active: ''} onClick={() => activateButton(item.id)}>
        //     {item.description}
        // </a>
        <button className={style.headMenuItem + (item.active === true ? ' ' + style.active : '')} onClick={() => activateButton(item.id)}>
            {item.description}
        </button>
    );
}

export default HeadMenuItem;
