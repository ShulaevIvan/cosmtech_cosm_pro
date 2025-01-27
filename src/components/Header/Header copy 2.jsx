import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import callbackIcon from '../../img/callback.svg';
import sendmailIcon from '../../img/send_mail.svg';
import mainLogoIcon from '../../img/logo_cosm_back.jpeg';
import mainLogoMinIcon from '../../img/logo_cosm.png';
import CallbackRequestPopup from "../CallbackRequestPopup/CallbackRequestPopup";
import MobileMenu from "../MobileMenu/MobileMenu";
import { setUrlToStorage, getUrlFromStorage } from "../../functions/urlToStorage";
import { callbackPopupShow } from "../../redux/slices/headerSlice";

const Header = () => {
    const headerState = useSelector((state) => state.header);
    const menuState = useSelector((state) => state.menu);
    const callbackPopup = useSelector((state) => state.header.callbackHeader.callbackPopupActive);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const descriptionRef = useRef(window.document.querySelector('meta[name="description"]'));
    const openGraphTitleRef = useRef(window.document.querySelector('meta[property="og:title"]'));
    const openGraphDescriptionRef = useRef(window.document.querySelector('meta[property="og:description"]'));
    const openGraphUrlRef = useRef(window.document.querySelector('meta[property="og:url"]'));
    const canonicalUrlRef = useRef(window.document.querySelector('link[rel="canonical"]'));


    const callbackPopupHandler = (status) => {
        dispatch(callbackPopupShow({ status: status }));
    };

    const submenuHandler = () => {

    };

    useEffect(() => {
        const targetTitle = headerState.pageTitles.find(
            (headerTitleObj) => location.pathname !== '/' ? headerTitleObj.path === location.pathname.replace(/\/$/, '') : 
                headerTitleObj.path === location.pathname
        );
        document.title = targetTitle ? targetTitle.name : '';
        openGraphTitleRef.current.content = targetTitle.name;
        descriptionRef.current.content = targetTitle.description;
        canonicalUrlRef.current.href = targetTitle.canonical;
        openGraphDescriptionRef.current.content = targetTitle.description;
        openGraphUrlRef.current.content = `https://cosmtech.ru${targetTitle.path}`;
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

    // useEffect(() => {
    //     window.ym(97856473, 'hit', location.pathname);
    // }, [location.pathname]);

    return (
        <React.Fragment>
            <header className={"main-header"}>
                {callbackPopup ?  
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
                                    <li className="has-submenu">
                                        <Link to={'/'}>Контрактное производство</Link>
                                        <ul className="main-nav-submenu-list">
                                            <li><Link>Косметика под своим брендом</Link></li>
                                            <li><Link>Декоративная косметика</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/services'}>Услуги</Link></li>
                                    <li><Link to={'/about'}>О Нас</Link></li>
                                    <li><Link to={'/contacts'}>Контакты</Link></li>
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