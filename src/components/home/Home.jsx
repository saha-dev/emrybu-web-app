import { FiPhone } from 'react-icons/fi';
import { FaViber } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import style from './Home.module.css';

function Home() {
    return (
        <div className={style.content}>
            <h3>Вас вітає Краща доставка суші в Києві - «ЇМ РИБУ І ХУДНУ»!</h3>
            {/* <p>
                Всім прихильникам здорового харчування компанія «ЇМ РИБУ І ХУДНУ» пропонує зробити такий спосіб життя ще більш доступним. Здійснюємо
                доставку широкого меню здорової їжі. Ми пропонуємо доставку суші, круасанів, рисової піци, десертів, салатів та напоїв. Купити суші в
                Києві тепер зовсім просто - достатньо оформити доставку у нас: дотримуйтеся здорового способу життя навіть в робочий день. Ми працюємо
                по всьому Києву та найближчому передмістю ( Козин, Ходосівка, Підгірці, Романків, Віта-Поштова, Коцюбинське, Чайки, Петропавлівська
                Борщагівка, Софіївська Борщагівка, Святопетрівське, Вишневе, Гатне, Крюківщина, Чабани, Новосілки, Хотів та Лісники ).
            </p> */}
            <h4>Прийом замовлень 10:00 - 21:00</h4>
            <h4>Доставка замовлень 11:30 - 23:00</h4>
            <div className={style.phone}>
                <p>
                    <FiPhone />
                    <button onClick={window.open('tel:+380634441188')}>063-444-11-88</button>
                    <button onClick={'https://telegram.me/share/url?url=tel:+1234567&text=123456'}>063-444-11-88</button>
                    <button onClick={() => (window.location = 'tg://msg?text=tel:+12345678')}>+12345678</button>
                    {/* <a href="tel:+380634441188">
                        <strong>063-444-11-88</strong>
                    </a> */}
                    <div onclick={window.open('tel:+71237777777')} style={{ cursor: 'pointer' }}>
                        050-444-11-88
                    </div>
                    {/* <a href="tel:+380504441188">
                        <strong>050-444-11-88</strong>
                    </a> */}
                </p>
                <p>
                    <FaViber style={{ marginRight: '5px', color: '#7b519b' }} />
                    <FaTelegram style={{ color: '#22a9e8' }} />
                    <a href="tel:+380636780264">
                        <strong>063-678-02-64</strong>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Home;
