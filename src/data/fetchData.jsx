import categories from './categories';

export const fetchDataCategoriesTemplate = () => {
    return categories.map((item, index) => ({ ...item, active: index === 0 }));
};
