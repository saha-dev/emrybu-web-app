import MenuItem from './MenuItem';
import style from './MenuList.module.css';
import ModalAppearance from '../Modal/ModalAppearance';
import fetchData from '../../data/fetchData';
import { useState } from 'react';

function MenuList() {
    const menuData = fetchData();
    const [menu, setMenu] = useState(menuData);
    const [dataModal, setDataModal] = useState({ active: false });

    const changeAmount = (id, action = '+') => {
        const newMenu = menu.map((obj) => {
            if (obj.id === id) {
                return { ...obj, amount: action === '+' ? obj.amount + 1 : obj.amount - 1 };
            }
            return obj;
        });
        setMenu(newMenu);
    };

    const showModalWindow = (item) => {
        setDataModal({ ...item, active: !dataModal.active });
    };

    const changeWishlist = (id) => {
        setMenu(
            menu.map((e) => {
                return e.id === id ? { ...e, wishlist: !e.wishlist } : { ...e };
            })
        );
    };
    return (
        <>
            <ModalAppearance dataModal={dataModal} showModalWindow={showModalWindow} />
            <div className={style.menuList}>
                {menu.map((item) => (
                    <MenuItem
                        item={item}
                        changeAmount={changeAmount}
                        key={item.id}
                        showModalWindow={showModalWindow}
                        changeWishlist={changeWishlist}
                    />
                ))}
            </div>
        </>
    );
}

export default MenuList;
