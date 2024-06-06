import React from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ContactsPageOrderForm from "../ContactsPageOrderForm/ContactPageOrderForm";
import { Link } from "react-router-dom";
import telegramLogo from '../../img/telegram_footer.svg'
import whatsappLogo from '../../img/whatsapp_footer.svg'
import vkLogo from '../../img/vk_footer.svg'

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
                                        <li><span className="span-title-bold">Телефон: </span> <Link to={'+78123630614'}>+7 (812) 363-06-14</Link></li>
                                        <li><span className="span-title-bold">Email: </span> 
                                         <Link to={"mailto:pro@cosmtech.ru&body=text?subject=Вопрос"} target={'_blank'}>pro@cosmtech</Link></li>
                                    </ul>
                                    <ul>
                                        <li className="contact-list-social">
                                            <span>
                                                <Link href="#"><img src={whatsappLogo} alt="social" /></Link>
                                            </span>  <Link href="#">+7 (921)-XXX-XX-XX</Link>
                                        </li>
                                        <li className="contact-list-social">
                                            <span>
                                                <Link href="#"><img src={telegramLogo} alt="social" /></Link>
                                            </span>  
                                            <Link to={'#'}>+7 (921)-XXX-XX-XX</Link>
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
                                    <Link href="#">Скачать полные реквизиты</Link>
                                </div>
                            </div>
                            <ContactsPageOrderForm />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="contact-page-map-title">
                            <h2>Мы на карте</h2>
                            <div className="contact-page-map-description">
                                <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                    когда нужно быстро заполнить макеты или прототипы содержимым. 
                                    Это тестовый контент, который не должен нести никакого смысла, 
                                    лишь показать наличие самого текста или продемонстрировать типографику в деле.
                                </p>
                            </div>
                        </div>
                            
                        <div className="map-wrap">
                            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9a3094a0d3acf49f8de23d10b6f24ef1ff95d76a1cce0e8e7f9ed4255f854a32&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </React.Fragment>
    )
};

export default ContactsPage;