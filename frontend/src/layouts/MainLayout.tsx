import NavBar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <NavBar/>
            <Outlet></Outlet>
        </>
    );
}