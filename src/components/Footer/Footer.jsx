import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { validateFooterCallback } from "../../redux/slices/footerSlice";

import footerLogo from '../../img/logo_cosm.jpeg';
import telegramLogo from '../../img/telegram_footer.svg';
import whatsappLogo from '../../img/whatsapp_footer.svg';
import vkLogo from '../../img/vk_footer.svg';

import GoToTop from "../GoToTopBtn/GoToTopBtn";

const Footer = () => {
    const dispatch = useDispatch();
    const footerState = useSelector((state) => state.footer);
    const footerCallbackRef = useRef(null);

    const goToTopHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const footerCallbackHandler = () => {
        dispatch(validateFooterCallback({inputValue: footerCallbackRef.current.value}));
    };

    const clearInputFooterCallback = (e) => {
        if (e.key === 'Backspace') {
            footerCallbackRef.current.value = '';
            dispatch(validateFooterCallback({inputValue: footerCallbackRef.current.value}));
        }
    };

    return (
        <React.Fragment>
            <footer className="main-footer">
                <div className="footer-wrap">
                    <div className="main-footer-top-row">
                        <div className="main-footer-logo">
                            <div className="footer-logo-social-row">
                                <div className="footer-logo">
                                    <Link to={'/'}><img src={footerLogo} alt="logo footer" /></Link>
                                </div>
                            <div className="footer-socials-row">
                                <div className="social-item">
                                    <Link to={'https://t.me/+79643637272'} target={'_blank'}>
                                        <img src={telegramLogo}  alt="telegram logo"/>
                                    </Link>
                                </div>
                                <div className="social-item whatsapp-footer-icon">
                                    <Link to={'https://wa.me/+79643637272'} target={'_blank'}>
                                        <img src={whatsappLogo}  alt="whatsapp logo"/>
                                    </Link>
                                </div>
                                <div className="social-item">
                                    <Link to={'https://vk.com/cosmtech'} target={'_blank'}><img src={vkLogo}  alt="vk logo"/></Link>
                                </div>
                            </div>
                        </div>
                
                        <div className="footer-logo-description">
                            <p>Мы гарантируем индивидуальный подход к каждому клиенту и оперативное решение возникающих вопросов.</p>
                        </div>
                    </div>
                    <div className="main-footer-form">
                        <form>
                            <div className="main-footer-form-label-wrap"><h5>Перезвоните мне</h5></div>
                            <div className="main-footer-input-wrap">
                                <div className="main-footer-input">
                                    <input
                                        className={footerState.footerFormCallbackValid ? null : 'input-err'}
                                        ref={footerCallbackRef}
                                        value={footerState.footerFormCallbackValue}
                                        onChange={footerCallbackHandler} type="tel"
                                        onKeyDown={(e) => clearInputFooterCallback(e)}
                                    />
                                </div>
                                <div className="main-footer-btn-send-wrap">
                                    <div className="main-footer-btn-send">Отправить</div>
                                </div>
                            </div>
                            <div className="main-footer-description-wrap">
                                <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-footer-bottom-row">
                    <div className="main-footer-contact-row">
                        <div className="main-footer-contact-title-wrap">
                            <h4>Контакты</h4>
                        </div>
                        <div className="main-footer-contact-list-wrap">
                            <ul>
                                <li>Адрес: <Link to={"https://yandex.ru/maps/?rtext=~59.895998,30.374016"} target={'_blank'}>Санкт-Петербург ул Салова 27 АБ</Link></li>
                                <li>Телефон: <Link to={"tel:+78123630614"}>+7 (812) 363-06-14</Link></li>
                                <li>email: <Link to={"mailto:pro@cosmtech.ru&body=text?subject=Вопрос"} target={'_blank'}>pro@cosmtech.ru</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-footer-contact-row">
                        <div className="main-footer-submenu-list-wrap">
                            <div className="main-footer-submenu-title-wrap">
                                <h4>Услуги</h4>
                            </div>
                            <ul className="main-footer-submenu">
                                <li><Link onClick={goToTopHandler} to={"/"}>Производство</Link></li>
                                <li><Link onClick={goToTopHandler} to={'/services'}>Собственная торовая марка</Link></li>
                                <li><Link to={"#"}>Частные вопросы</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-footer-contact-row">
                        <div className="main-footer-submenu-list-wrap">
                            <div className="main-footer-submenu-title-wrap">
                                <h4>Информация</h4>
                            </div>
                            <ul className="main-footer-submenu">
                                <li><Link onClick={goToTopHandler} to={'/about'}>О Компании</Link></li>
                                <li><Link to={"#"}>Реквизиты</Link></li>
                                <li><Link onClick={goToTopHandler} to={'/contacts'}>Контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-footer-copy-wrap">
                    <span className="footer-copy-text">© 2024 ООО Космотех все права защищены</span>
                    <span className="footer-policy-text"><Link target={'_blank'} to={'/about/policy'}>Политика конфидициальности</Link></span>
                </div>
                </div>
            <GoToTop goToTopHandler={goToTopHandler} />
            </footer>
        </React.Fragment>
    )
};

export default Footer;