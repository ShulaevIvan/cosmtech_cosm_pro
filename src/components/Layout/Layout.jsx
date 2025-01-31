import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import PrefooterMainPage from "../PrefooterMainPage/PrefooterMainPage";
import StickySideMenu from "../StickySideMenu/StickySideMenu";
import Footer from "../Footer/Footer";
import { setUrlToStorage } from "../../functions/urlToStorage";


const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    
    useEffect(() => {
        const url = location.pathname.replace(/\/$/, '');
        setUrlToStorage(url);
    }, [location.pathname]);

    useEffect(() => {
        if (localStorage.getItem('currentPath')) {
            navigate(localStorage.getItem('currentPath'));
        }
    }, [location.pathname]);
    
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
                <StickySideMenu />
            </main>
            {location && location.pathname === '/' ? <PrefooterMainPage /> : null}
            <Footer />
        </React.Fragment>
    );
};

export default Layout