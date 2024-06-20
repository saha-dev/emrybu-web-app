import './App.css';
import Header from './components/header/Header';

const tg = window.Telegram.WebApp;
tg.expand();

function App() {
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
