import React from "react";

import telegramLogo from '../../img/telegram_footer.svg'
import whatsappLogo from '../../img/whatsapp_footer.svg'
import vkLogo from '../../img/vk_footer.svg'
import findUsPhoto from '../../img/contacts_enter_to_us.jpg';
import cosmtechReq from '../../doc/cosmtech_req.doc';
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ContactsPageOrderForm from "../ContactsPageOrderForm/ContactPageOrderForm";
import YandexMap from "../YandexMap/YandexMap";
import { Link } from "react-router-dom";

const ContactsPage = () => {

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
            <div className="inner-page-container-contacts">
                <section>
                    <div className="container">
                        <div className="contact-page-main-contacts-row">
                            <div className="contacts-content-wrap">
                                <div className="contact-list-content">
                                    <h3>Производство</h3>
                                    <ul>
                                        <li><span className="span-title-bold">Телефон: </span> <Link to={'tel:+78123630614'}>+7 (812) 363-06-14</Link></li>
                                        <li><span className="span-title-bold">Email: </span> 
                                         <Link to={"mailto:pro@cosmtech.ru&body=text?subject=Вопрос"} target={'_blank'}>pro@cosmtech</Link></li>
                                    </ul>
                                    <ul>
                                        <li className="contact-list-social">
                                            <span>
                                                <Link to={'https://wa.me/+79643637272'} target={'_blank'}><img src={whatsappLogo} alt="social" /></Link>
                                            </span>  <Link to={'https://wa.me/+79643637272'} target={'_blank'}>+7 (964)-363-72-72</Link>
                                        </li>
                                        <li className="contact-list-social">
                                            <span>
                                                <Link to={'https://t.me/+79643637272'} target={'_blank'}><img src={telegramLogo} alt="social" /></Link>
                                            </span>  
                                            <Link to={'https://t.me/+79643637272'} target={'_blank'}>+7 (964)-363-72-72</Link>
                                        </li>
                                        <li className="contact-list-social">
                                            <span><Link><img src={vkLogo} alt="social" /></Link></span>
                                            <Link to={'https://vk.com/cosmtech'} target={'_blank'}>Группа Вконтакте</Link>
                                                
                                        </li>
                                    </ul>
                                </div>

                                <div className="contact-list-content">
                                    <h3>Реквизиты</h3>
                                    <div className="req-list-wrap">
                                        <ul>
                                            <li><span className="req-list-name">Полное наименование :</span> Общество с ограниченной ответственностью «КОСМЕТИЧЕСКИЕ ТЕХНОЛОГИИ»</li>
                                            <li><span className="req-list-name">ИНН:</span> 7816737360</li>
                                            <li><span className="req-list-name">КПП:</span> 781601001</li>
                                            <li><span className="req-list-name">ОГРН:</span> 1227800166880</li>
                                            <li><span className="req-list-name">БИК:</span> 044030653</li>
                                            <li><span className="req-list-name">Юридический Адрес:</span> 192102, г. Санкт-Петербург, вн. тер. г. Муниципальный округ Волковское, ул. Салова д.27, литера АБ, помещ. 24Н-4, офис 1
                                            </li>
                                            <li><span className="req-list-name">Наименование банка:</span> СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</li>
                                            <li><span className="req-list-name">Расчетный счет:</span> 40702810355000000126</li>
                                            <li><span className="req-list-name">Корреспондентский счет:</span> 40702810355000000126</li>
                                        </ul>
                                    </div>
                                    <Link to={cosmtechReq} download={true} target={"_blank"}>Скачать полные реквизиты</Link>
                                </div>
                            </div>
                            <ContactsPageOrderForm />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="contact-page-map-title">
                            <h2>Как добраться</h2>
                            <div className="contact-page-map-description-wrap">
                                <div className="contact-page-map-description-content">
                                    <p> 
                                        Вход со стороны ул. Салова, оранжевая крыша с козырьком, 
                                        внизу вывеска с верблюдами, правая стеклянная дверь, 
                                        далее через вертушку с охраной и справа лифт, 
                                        7 этаж, компания "Косметические технологии".
                                    </p>
                                </div>
                                <div className="contact-page-map-description-btn-wrap">
                                    <Link
                                        target={'_blank'} 
                                        to={"https://yandex.ru/maps/?rtext=~59.895998,30.374016"} 
                                        className="contact-page-map-description-btn"
                                    >проложить маршрут</Link>
                                </div>
                               
                            </div>
                            <div className="contact-page-find-us-row">
                                <div className="contact-page-find-us-image-wrap">
                                    <img src={findUsPhoto} alt="как нас найти" />
                                </div>
                                <div className="contact-page-find-us-description">
                                    <YandexMap />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </React.Fragment>
    )
};

export default ContactsPage;