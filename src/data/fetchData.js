import menu from './menu';

const fetchData = () => {
    return menu.map((el) => ({ ...el, amount: 0 }));
};

export default fetchData;
