import { fetchDataMenuTemplate, fetchDataCategoriesTemplate } from '../../data/fetchData';
import { useParams } from 'react-router-dom';
import style from './SingleMenuItem.module.css';
import Dishes from './Dishes';

const categories = fetchDataCategoriesTemplate();
const dishes = fetchDataMenuTemplate();

function SingleMenuItems() {
    const { slug } = useParams();
    const currentDishes = dishes.filter((item) => item.categoryId === categories.find((cat) => cat.slug === slug)?.id);
    return (
        <div className={style.itemsList}>
            {currentDishes.map((item) => (
                <Dishes item={item} key={item.id} />
            ))}
        </div>
    );
}

export default SingleMenuItems;
