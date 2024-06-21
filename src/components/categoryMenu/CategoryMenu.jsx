import CategoryMenuItem from './CategoryMenuItem';
import style from './CategoryMenu.module.css';
import { fetchDataCategoriesTemplate } from '../../data/fetchData';

const menuData = fetchDataCategoriesTemplate();

function CategoryMenu() {
    return (
        <nav className={style.categoryMenu}>
            {menuData.map((item) => (
                <CategoryMenuItem item={item} key={item.id} />
            ))}
        </nav>
    );
}

export default CategoryMenu;
