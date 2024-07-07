import { NavLink } from 'react-router-dom';
import { RxInfoCircled } from 'react-icons/rx';
import { TbShoppingBag } from 'react-icons/tb';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
import style from './BurgerMenu.module.css';

//+ active ? ' ' + style.active : ''
function BurgerMenu({ showBMenu, active }) {
    return (
        <div className={style.menu + (active ? ' ' + style.active : '')} onClick={() => showBMenu()}>
            <div className={style.blur}>
                <div className={style.menuContent} onClick={(e) => e.stopPropagation()}>
                    <div className={style.closeMenu} onClick={() => showBMenu()}></div>
                    <nav className={style.navList}>
                        {/* <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            Оформлення та доставка
                        </NavLink> */}
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            <div className={style.navContent}>
                                <TbShoppingBag className={style.icon} />
                                Кошик
                            </div>
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            <div className={style.navContent}>
                                <FaRegHeart className={style.icon} /> Мої улюблені страви
                            </div>
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            <div className={style.navContent}>
                                <MdOutlinePlaylistAddCheck className={style.icon} />
                                Мої замовлення
                            </div>
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            <div className={style.navContent}>
                                <RxInfoCircled className={style.icon} />
                                Інформація для доставки
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>

        // <div className={style.blur} onClick={() => showBMenu()}>
        //     <div className={style.menu + active ? ' ' + style.active : ''} onClick={(e) => e.stopPropagation()}>
        //     </div>
        // </div>
    );
}

export default BurgerMenu;
