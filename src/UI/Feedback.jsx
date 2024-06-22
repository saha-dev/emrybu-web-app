import { useContext } from 'react';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import ItemContext from '../context/ItemContext';
import style from './Feedback.module.css';
import Button from './Button';

function Feedback() {
    const { changeFeedback, id, feedback } = useContext(ItemContext);
    return (
        <div className={style.feedback}>
            <Button btnclass={style.like} onClick={() => changeFeedback(id)}>
                <BiLike className={style.feedbackIcon} />
            </Button>
            <span className={style.feedbackAmount}>{feedback}</span>
            <Button btnclass={style.dislike} onClick={() => changeFeedback(id, '-')}>
                <BiDislike className={style.feedbackIcon} />
            </Button>
        </div>
    );
}

export default Feedback;
