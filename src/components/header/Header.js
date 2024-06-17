import { GiHamburgerMenu } from 'react-icons/gi';
import { RiSearchLine } from 'react-icons/ri';
import { TbShoppingBag } from 'react-icons/tb';
import style from './Header.module.css';
import HeadMenu from './HeadMenu';
import categories from '../../data/categories';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}>
                <GiHamburgerMenu className={style.buttons} />
                <div className={style.logo}></div>
                <RiSearchLine className={style.buttons} />
                <TbShoppingBag className={style.buttons} />
            </div>
            <HeadMenu categories={categories} />
        </div>
    );
}

export default Header;
