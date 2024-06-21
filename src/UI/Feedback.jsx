import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import style from './Feedback.module.css';
import Button from './Button';

function Feedback({ feedbackAmount, changeFeedbackAmount, id }) {
    return (
        <div className={style.feedback}>
            <Button btnclass={style.like} onClick={changeFeedbackAmount} id={id}>
                <BiLike className={style.feedbackIcon} />
            </Button>
            <span className={style.feedbackAmount}>{feedbackAmount}</span>
            <Button btnclass={style.dislike} onClick={changeFeedbackAmount} id={id} action="-">
                <BiDislike className={style.feedbackIcon} />
            </Button>
        </div>
    );
}

export default Feedback;
