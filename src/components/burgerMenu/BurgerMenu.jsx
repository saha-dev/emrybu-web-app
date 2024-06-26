import { NavLink } from 'react-router-dom';
import style from './BurgerMenu.module.css';

//+ active ? ' ' + style.active : ''
function BurgerMenu({ showBMenu, active }) {
    return (
        <div className={style.menu + (active ? ' ' + style.active : '')} onClick={() => showBMenu()}>
            <div className={style.blur}>
                <div className={style.menuContent} onClick={(e) => e.stopPropagation()}>
                    <div className={style.closeMenu} onClick={() => showBMenu()}></div>
                    <nav className={style.navList}>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            Прийом та доставка замовлень
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            Кошик
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            Мої улюблені страви
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            Мої замовлення
                        </NavLink>
                        <NavLink to="." className={() => style.navItem} onClick={() => showBMenu()}>
                            Інформація для доставки
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
