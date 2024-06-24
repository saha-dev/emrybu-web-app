import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiSearchLine } from 'react-icons/ri';
import { TbShoppingBag } from 'react-icons/tb';
import Button from '../../UI/Button';

import CategoryMenu from '../categoryMenu/CategoryMenu';

import style from './Header.module.css';
import { useState } from 'react';
import BurgerMenu from '../burgerMenu/BurgerMenu';

function Header() {
    const [bMenu, setBMenu] = useState(false);
    const showBMenu = () => {
        setBMenu(!bMenu);
    };
    return (
        <div className={style.header}>
            <BurgerMenu showBMenu={showBMenu} active={bMenu} />
            <div className={style.headerLogo}>
                <Button btnclass="headerButton" onClick={() => showBMenu()}>
                    <GiHamburgerMenu className={style.buttonsIcon} />
                </Button>
                <NavLink to="." className={() => style.logoLink}>
                    <div className={style.logo}></div>
                </NavLink>
                <Button btnclass="headerButton">
                    <RiSearchLine className={style.buttonsIcon} />
                </Button>
                <Button btnclass="headerButton">
                    <TbShoppingBag className={style.buttonsIcon} />
                </Button>
            </div>
            <CategoryMenu />
        </div>
    );
}

export default Header;
