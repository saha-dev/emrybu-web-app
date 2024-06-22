import { createContext } from 'react';

const ItemContext = createContext({
    item: {},
    id: null,
    amount: 0,
    changeAmount: () => {},
    feedback: 0,
    changeFeedback: () => {},
    setIsFavorite: () => {},
});

export default ItemContext;
