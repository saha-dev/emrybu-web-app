import MenuItem from './MenuItem';
import style from './MenuList.module.css';
import Modal from '../Modal/Modal';
import fetchData from '../../data/fetchData';
import { useState } from 'react';

function MenuList() {
    const menuData = fetchData();
    const [menu, setMenu] = useState(menuData);
    const [showModal, setShowModal] = useState(false);

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

    const showModalWindow = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Modal active={showModal} showModalWindow={showModalWindow}>
                <img src="https://emrybu.com.ua/image/cache/catalog/banners/new/img_6968-560x560.jpg" alt="" onClick={() => showModalWindow()} />
            </Modal>
            <div className={style.menuList}>
                {menu.map((item) => (
                    <MenuItem item={item} changeAmount={changeAmount} key={item.id} showModalWindow={showModalWindow} />
                ))}
            </div>
        </>
    );
}

export default MenuList;
