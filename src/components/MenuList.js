import MenuItem from './MenuItem';
import style from './MenuList.module.css';
import fetchData from '../data/fetchData';
import { useState } from 'react';

function MenuList() {
    const menuData = fetchData();
    const [menu, setMenu] = useState(menuData);

    const changeAmount = (id, action = '+') => {
        const newMenu = menu.map((obj) => {
            if (obj.id === id) {
                return { ...obj, amount: action === '+' ? obj.amount + 1 : obj.amount - 1 };
            }
            return obj;
        });
        console.log(action, newMenu);
        setMenu(newMenu);
    };

    return (
        <div className={style.menuList}>
            {menu.map((item) => (
                <MenuItem item={item} changeAmount={changeAmount} key={item.id} />
            ))}
        </div>
    );
}

export default MenuList;
