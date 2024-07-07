import { useContext } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import ItemContext from '../../context/ItemContext';
import style from './Photo.module.css';

function Photo({ changeState, modal }) {
    const { item, setIsFavorite, id } = useContext(ItemContext);
    return (
        <div className={style[modal ? 'imageWrapperModal' : 'imageWrapper']}>
            <img src={item.imgUrl} alt="" className={style[modal ? 'itemImageModal' : 'itemImage']} onClick={() => changeState()} />
            <button className={style.buttonFavoriteList} onClick={() => setIsFavorite(id)}>
                {item.isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    );
}

export default Photo;
