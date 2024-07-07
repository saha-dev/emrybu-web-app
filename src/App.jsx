import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/home/Home.jsx';
import AllCategories from './components/menu/AllCategories.jsx';
import './App.css';
import SingleCategoryItems from './components/menu/SingleCategoryItems';

const tg = window.Telegram.WebApp;
tg.expand();

function App() {
    return (
        <BrowserRouter>
            <main className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="menu" element={<AllCategories />} />
                        <Route path="menu/:slug" element={<SingleCategoryItems />} />
                        <Route path="*" element={<h1>Not found</h1>} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
