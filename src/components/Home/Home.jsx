import { FiPhone } from 'react-icons/fi';
import { FaViber } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import style from './Home.module.css';

function Home() {
    return (
        <div className={style.content}>
            <h3>Вас вітає Краща доставка суші в Києві - «ЇМ РИБУ І ХУДНУ»!</h3>
            <h4>Прийом замовлень 10:00 - 21:00</h4>
            <h4>Доставка замовлень 11:30 - 23:00</h4>
            <div className={style.phone}>
                <FiPhone />
                <span className={style.linkNumber} onClick={() => window.open('tel:+380634441188')}>
                    <strong>063-444-11-88</strong>
                </span>
                <span className={style.linkNumber} onClick={() => window.open('tel:+380504441188')}>
                    <strong>050-444-11-88</strong>
                </span>
                <div className={style.messagers}>
                    <FaViber style={{ marginRight: '5px', color: '#7b519b' }} />
                    <FaTelegram style={{ color: '#22a9e8' }} />
                    <span className={style.linkNumber} onClick={() => window.open('tel:+380636780264')}>
                        <strong>063-678-02-64</strong>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
