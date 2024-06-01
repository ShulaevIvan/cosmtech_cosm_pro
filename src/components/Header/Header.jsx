import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import callbackIcon from '../../img/callback.svg';
import sendmailIcon from '../../img/send_mail.svg';
import mainLogoIcon from '../../img/logo_cosm.jpeg';
import mainLogoMinIcon from '../../img/logo_cosm.png';

import CallbackRequestPopup from "../CallbackRequestPopup/CallbackRequestPopup";
import MobileMenu from "../MobileMenu/MobileMenu";

import { callbackPopupShow } from "../../redux/slices/headerSlice";


const Header = () => {
    const dispatch = useDispatch();
    const headerState = useSelector((state) => state.header);
    const callbackPopup = useSelector((state) => state.header.callbackHeader.callbackPopupActive);

    const callbackPopupHandler = (status) => {
        dispatch(callbackPopupShow({ status: status }));
    };
    

    return (
        <React.Fragment>
            <header className="main-header">
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
                                    <li><Link to={'/'}>Контрактное производство</Link></li>
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
                            <div class="callback-wrap">
                                <span className="callback-icon"><img src={callbackIcon} alt="callback-icon" class="filter-green" /></span>
                                <span><a href="#">+7 (812) 363-06-14</a></span>
                            </div>
                            <div class="email-wrap">
                                <span className="email-icon"><img src={sendmailIcon} alt="callback-icon" /></span>
                                <span><a href="#">pro@cosmtech.ru</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header;