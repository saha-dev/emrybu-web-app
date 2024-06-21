import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home/Home';
import MenuItems from './components/Menu/MenuItems';
import './App.css';
import SingleMenuItems from './components/Menu/SingleMenuItems';

const tg = window.Telegram.WebApp;
tg.expand();

function App() {
    return (
        <BrowserRouter>
            <main className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="menu" element={<MenuItems />} />
                        <Route path="menu/:slug" element={<SingleMenuItems />} />
                        <Route path="*" element={<h1>Not found</h1>} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
