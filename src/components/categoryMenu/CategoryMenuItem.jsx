import { NavLink } from 'react-router-dom';
import style from './CategoryMenuItem.module.css';

function CategoryMenuItem({ item, handlerMenuButtonClick }) {
    return (
        <NavLink to={`menu/${item.slug}`} className={({ isActive }) => style.headMenuItem + (isActive ? ' ' + style.active : '')}>
            {item.description}
        </NavLink>
    );
}

export default CategoryMenuItem;
