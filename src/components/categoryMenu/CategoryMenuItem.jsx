import { NavLink } from 'react-router-dom';
import style from './CategoryMenuItem.module.css';

function CategoryMenuItem({ item }) {
    return (
        <NavLink
            to={`menu/${item.slug}`}
            end={item.slug === '' ? true : false}
            className={({ isActive }) => style.headMenuItem + (isActive ? ' ' + style.active : '')}
        >
            {item.description}
        </NavLink>
    );
}

export default CategoryMenuItem;
