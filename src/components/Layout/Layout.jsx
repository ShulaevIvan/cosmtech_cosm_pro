import React from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "../Header/Header";
import PrefooterMainPage from "../PrefooterMainPage/PrefooterMainPage";
import Footer from "../Footer/Footer";


const Layout = () => {
    const location = useLocation();
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            {location && location.pathname === '/' ? <PrefooterMainPage /> : null}
            <Footer />
        </React.Fragment>
    );
};

export default Layout