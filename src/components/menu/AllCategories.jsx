import style from './AllCategories.module.css';
import { fetchDataCategoriesTemplate } from '../../data/fetchData';
import { NavLink } from 'react-router-dom';

function AllCategories() {
    const categories = fetchDataCategoriesTemplate();
    return (
        <div className={style.container}>
            <h3 className={style.textMenu}>Меню</h3>
            <div className={style.categories}>
                {categories.map((category) => {
                    return (
                        <div className={style.category}>
                            <div className={style.categoryContent}>
                                <NavLink to={category.slug} className={style.title}>
                                    {category.description}
                                    <div className={style.imageContainer}>
                                        <img className={style.itemImage} src={category.imgUrl} alt={style.itemImage} />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AllCategories;
