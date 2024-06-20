import { GiHamburgerMenu } from 'react-icons/gi';
import { RiSearchLine } from 'react-icons/ri';
import { TbShoppingBag } from 'react-icons/tb';
import Button from '../../UI/Button';

import CategoryMenu from '../categoryMenu/CategoryMenu';

import style from './Header.module.css';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}>
                <Button btnclass="headerButton">
                    <GiHamburgerMenu className={style.buttonsIcon} />
                </Button>
                <div className={style.logo}></div>
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
