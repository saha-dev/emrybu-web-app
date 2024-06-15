import MenuItem from './MenuItem';
import style from './MenuList.module.css';
import menu from '../data/menu';

function MenuList() {
    return (
        <div className={style.dishList}>
            {menu.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </div>
    );
}

export default MenuList;
