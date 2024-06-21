import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

function Mainlayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Mainlayout;
