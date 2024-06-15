import HeadMenuItem from './HeadMenuItem';
import style from './HeadMenu.module.css';
function HeadMenu({ categories }) {
    return (
        <div className={style.headMenu}>
            {categories.map((el) => (
                <HeadMenuItem item={el} key={el.id} />
            ))}
        </div>
    );
}

export default HeadMenu;
