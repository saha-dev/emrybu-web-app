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
        if (dataModal.active) setDataModal({ ...dataModal, amount: newMenu.find((item) => item.id === id).amount });
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
        if (dataModal.active) setDataModal({ ...dataModal, wishlist: !dataModal.wishlist });
    };

    const changeFeedbackAmount = (id, action = '+') => {
        const newMenu = menu.map((obj) => {
            if (obj.id === id) {
                return { ...obj, feedbackAmount: action === '+' ? obj.feedbackAmount + 1 : obj.feedbackAmount - 1 };
            }
            return obj;
        });
        setMenu(newMenu);
        // if (dataModal.active) setDataModal({ ...dataModal, amount: newMenu.find((item) => item.id === id).amount });
    };

    return (
        <>
            <ModalAppearance dataModal={dataModal} showModalWindow={showModalWindow} changeWishlist={changeWishlist} changeAmount={changeAmount} />
            <div className={style.menuList}>
                {menu.map((item) => (
                    <MenuItem
                        item={{ ...item }}
                        changeAmount={changeAmount}
                        key={item.id}
                        showModalWindow={showModalWindow}
                        changeWishlist={changeWishlist}
                        changeFeedbackAmount={changeFeedbackAmount}
                    />
                ))}
            </div>
        </>
    );
}

export default MenuList;
