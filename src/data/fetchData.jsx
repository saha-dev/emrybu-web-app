import categories from './categories';
import menu from './menu';

export const fetchDataCategoriesTemplate = () => categories;
// return categories.map((item, index) => ({ ...item, active: index === 0 }));

export const fetchDataMenuTemplate = () =>
    menu.map((item) => {
        return { ...item, amount: 0 };
    });
