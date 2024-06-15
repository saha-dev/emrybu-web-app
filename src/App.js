import './App.css';
import MenuList from './components/MenuList';
import Header from './components/header/Header';

const tg = window.Telegram.WebApp;
tg.expand();
// tg.MainButton.textColor = '#FFFFFF';
// tg.MainButton.color = '#2cab37';

function App() {
    return (
        <div className="App">
            <Header />
            <MenuList />
        </div>
    );
}

export default App;
