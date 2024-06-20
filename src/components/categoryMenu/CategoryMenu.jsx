import CategoryMenuItem from './CategoryMenuItem';
import style from './CategoryMenu.module.css';
import { fetchDataCategoriesTemplate } from '../../data/fetchData';
import { useState } from 'react';

const menuData = fetchDataCategoriesTemplate();

function CategoryMenu() {
    const [categoryMenu, setCategoryMenu] = useState(menuData);
    const handlerMenuButtonClick = (id) => {
        const newMenu = categoryMenu.map((item) => {
            return { ...item, active: item.id === id };
        });
        setCategoryMenu(newMenu);
    };

    return (
        <div className={style.categoryMenu}>
            {categoryMenu.map((item) => (
                <CategoryMenuItem item={item} handlerMenuButtonClick={handlerMenuButtonClick} key={item.id} />
            ))}
        </div>
    );
}

export default CategoryMenu;
