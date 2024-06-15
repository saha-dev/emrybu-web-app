import style from './HeadMenuItem.module.css';

function HeadMenuItem({ item }) {
    return (
        <a href="/" className={style.headMenuItem}>
            {item.description}
        </a>
    );
}

export default HeadMenuItem;
