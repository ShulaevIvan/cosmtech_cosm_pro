import React from "react";
import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUrlToStorage, getUrlFromStorage } from "../../functions/urlToStorage";

import callbackIcon from '../../img/callback.svg';
import sendmailIcon from '../../img/send_mail.svg';
import mainLogoIcon from '../../img/logo_cosm_back.jpeg';
import mainLogoMinIcon from '../../img/logo_cosm.png';
import Snow from "../../functions/snow";
import { getSeasonByDate } from "../../functions/getSeasonByDate";

import CallbackRequestPopup from "../CallbackRequestPopup/CallbackRequestPopup";
import MobileMenu from "../MobileMenu/MobileMenu";

import { callbackPopupShow } from "../../redux/slices/headerSlice";
import { 
    submenuActive,
    resetMenu 
} from '../../redux/slices/menuSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const headerState = useSelector((state) => state.header);
    const menuState = useSelector((state) => state.menu);
    const descriptionRef = useRef(window.document.querySelector('meta[name="description"]'));
    const openGraphTitleRef = useRef(window.document.querySelector('meta[property="og:title"]'));
    const openGraphDescriptionRef = useRef(window.document.querySelector('meta[property="og:description"]'));
    const openGraphUrlRef = useRef(window.document.querySelector('meta[property="og:url"]'));
    const canonicalUrlRef = useRef(window.document.querySelector('link[rel="canonical"]'));


    const callbackPopupHandler = (status) => {
        dispatch(callbackPopupShow({ status: status }));
    };

    const submenuHandler = (menuId, menuName) => {
        dispatch(submenuActive({menuId: menuId, menuName: menuName}));
    };
    const resetMenuHandler = () => {
        dispatch(resetMenu());
    };

    useEffect(() => {
        const targetTitle = headerState.pageTitles.find(
            (headerTitleObj) => location.pathname !== '/' ? headerTitleObj.path === location.pathname.replace(/\/$/, '') : 
                headerTitleObj.path === location.pathname
        );
        if (targetTitle) {
            document.title = targetTitle ? targetTitle.name : '';
            openGraphTitleRef.current.content = targetTitle.name;
            descriptionRef.current.content = targetTitle.description;
            canonicalUrlRef.current.href = targetTitle.canonical;
            openGraphDescriptionRef.current.content = targetTitle.description;
            openGraphUrlRef.current.content = `https://cosmtech.ru${targetTitle.path}`;
            return;
        }
        else if (!targetTitle) {
            const mainPage = headerState.pageTitles.find((headerTitleObj) => headerTitleObj.path === '/');
            document.title = mainPage.name;
            openGraphTitleRef.current.content = mainPage.name;
            descriptionRef.current.content = mainPage.description;
            canonicalUrlRef.current.href = mainPage.canonical;
            openGraphDescriptionRef.current.content = mainPage.description;
            openGraphUrlRef.current.content = `https://cosmtech.ru`;
            window.location.pathname = '/';
            return;
        }

    }, [location.pathname]);

    useEffect(() => {
        const currentUrl = getUrlFromStorage();
        if (!currentUrl && location.pathname) {
            setUrlToStorage(location.pathname.replace(/\/$/, ''));
            if (location.pathname !== '/') {
                navigate(currentUrl.replace(/\/$/, ''));
            }
            
            return;
        }
    }, []);

    useEffect(() => {
        getSeasonByDate();
        // new Snow();
    }, [])

    // useEffect(() => {
    //     window.ym(97856473, 'hit', location.pathname);
    // }, [location.pathname]);

    return (
        <React.Fragment>
            <header 
                className={"main-header"}  
                onMouseLeave={resetMenuHandler}
            >
                {headerState.callbackHeader.callbackPopupActive ?  
                    <CallbackRequestPopup 
                        callbackPopupHander = {callbackPopupHandler}
                        callbackState = {headerState.callbackHeader}
                    /> 
                : null}
                <MobileMenu logo={mainLogoMinIcon}  />
                <div className="container-center-header">
                    <div className="main-header-row">
                        <div className="logo-wrap"><Link to={'/'}><img src={mainLogoIcon}  alt="logo"/></Link></div>
                        <div className="main-nav-wrap">
                            <nav className="main-nav">
                                <ul className="main-nav-list">
                                    {menuState.mainMenu.menuItems.map((menuItem) => {
                                        return (
                                            <React.Fragment key={menuItem.id}>
                                                <li
                                                    onClick={resetMenuHandler}
                                                    className={
                                                        menuItem.submenu ? 
                                                            menuItem.submenu.active ? 'has-submenu-active' : 'has-submenu active': null
                                                    }
                                                    onMouseEnter={() => submenuHandler(menuItem.id, menuItem.name)}
                                                    onMouseLeave={() => submenuHandler(menuItem.id, menuItem.name)} 
                                                >
                                                    <Link to={menuItem.url}>{menuItem.name}</Link>
                                                    {menuItem.submenu && menuItem.submenu.active ? 
                                                        <ul  
                                                            className={menuItem.submenu && menuItem.submenu.active ? 
                                                                "main-nav-submenu-list active": "main-nav-submenu-list"}
                                                        >
                                                            {menuItem.submenu.menuItems.map((submenuItem) => {
                                                                return (
                                                                    <React.Fragment key={submenuItem.id}>
                                                                        <li><Link to={submenuItem.url}>{submenuItem.name}</Link></li>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </ul>
                                                    : null}
                                                </li>
                                            </React.Fragment>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className="contacts-header-row">
                            <div className="callback-btn-wrap">
                                <span 
                                    className="callback-btn"
                                    onClick={() => callbackPopupHandler(true)}
                                >Консультация</span>
                                <span className="header-worktime">пн-пт с 10:00 - 18:00</span>
                            </div>
                            <div className="callback-wrap">
                                <span className="callback-icon"><img src={callbackIcon} alt="callback-icon" className="filter-green" /></span>
                                <span><Link to={"tel:+78123630614"}>+7 (812) 363-06-14</Link></span>
                            </div>
                            <div className="email-wrap">
                                <span className="email-icon"><img src={sendmailIcon} alt="callback-icon" /></span>
                                <span><Link to={"mailto:pro@cosmtech.ru&body=text?subject=Вопрос"} target="_blank">pro@cosmtech.ru</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header;