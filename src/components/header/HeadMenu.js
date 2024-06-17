import HeadMenuItem from './HeadMenuItem';
import style from './HeadMenu.module.css';
import { useState } from 'react';

function HeadMenu({ categories }) {
    const [menu, setActive] = useState(categories);

    const activateButton = (id) => {
        console.log(menu);
        setActive(menu.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false })));
    };

    console.log(menu);

    return (
        <div className={style.headMenu}>
            {menu.map((item) => (
                <HeadMenuItem item={item} key={item.id} activateButton={activateButton} />
            ))}
        </div>
    );
}

export default HeadMenu;
