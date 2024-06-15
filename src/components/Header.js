// import { IoMenu } from 'react-icons/io5';
// import { FiMenu } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiSearchLine } from 'react-icons/ri';
import style from './Header.module.css';

function Header() {
    return (
        <div className={style.header}>
            <GiHamburgerMenu className={style.buttons} />
            <div className={style.logo}></div>
            <RiSearchLine className={style.buttons} />
        </div>
    );
}

export default Header;
