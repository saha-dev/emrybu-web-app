import style from './CategoryMenuItem.module.css';

function HeadMenuItem({ item, handlerMenuButtonClick }) {
    return (
        <button className={style.headMenuItem + (item.active === true ? ' ' + style.active : '')} onClick={() => handlerMenuButtonClick(item.id)}>
            {item.description}
        </button>
    );
}

export default HeadMenuItem;
