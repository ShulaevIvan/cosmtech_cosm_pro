import React from "react";
import { Link } from "react-router-dom";
import YandexMap from "../YandexMap/YandexMap";
import vkIcon from '../../img/vk_footer.svg';
import whatsapp from '../../img/whatsapp_footer.svg';
import telegram from '../../img/telegram_footer.svg';

const AboutTabs = (props) => {
    const activeTab = props.tabs.find((item) => item.active);

    return (
        <React.Fragment>
            <div className="container">
                <div className="about-page-production-tab-wrap">
                <div className="about-page-production-tab-links-row">
                    {props.tabs.map((tabItem) => {
                        return (
                            <React.Fragment key={tabItem.id}>
                                <div 
                                    className={tabItem.active ? "about-page-production-tab-link-wrap tab-active " : "about-page-production-tab-link-wrap"}
                                    onClick={() => props.tabHandler(tabItem.id)}
                                >
                                    <Link>{tabItem.title}</Link>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                {activeTab ? 
                    <div className={'about-page-production-tab-content tab-active'}>
                        {activeTab.name === 'coop' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                                <div className="about-page-production-tab-coop-row">
                                    <div className="about-page-production-tab-coop-item">
                                        <p>
                                            Уважаемые поставщики! Просьба направлять ваши предложения только на указанный адрес электронной почты. 
                                            Ваши предложения помогают оптимизировать процессы, повышая качество наших услуг. </p>
                                        <div className="about-page-tab-cooperation-row">
                                            {activeTab.coopEmails.map((coopItem) => {
                                                return (
                                                    <React.Fragment key={coopItem.id}>
                                                        <div className="about-page-tab-cooperation-item">
                                                            <h4>{coopItem.name}</h4>
                                                            <span>email: <Link to={`mailto:${coopItem.email}`}target={'_blank'}>{coopItem.email}</Link></span>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div>
                                       
                                    </div>
                                </div>
                            </React.Fragment>
                        : null}
                        {activeTab.name === 'reviews' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                                <p>Отставьте отзыв о нашей работе на любой из площадок</p>
                                <div className="about-page-production-reviews-logo-row">
                                    {activeTab.reviewPlaces.map((reviewItem) => {
                                        return (
                                            <React.Fragment key={reviewItem.id}>
                                                <div className="about-page-production-review-item">
                                                    <Link to={`${reviewItem.url}`} target={'_blank'}>
                                                        <img src={reviewItem.img} alt={reviewItem.imgAlt} />
                                                    </Link>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        : null}
                        {activeTab.name === 'req' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                                <div className="about-page-req-table-wrap">
                                    {activeTab.reqTableRows.map((rowItem) => {
                                        return (
                                            <React.Fragment key={rowItem.id}>
                                                <div className="about-page-req-table-row">
                                                    <div className="about-page-req-title">
                                                        {rowItem.title}
                                                    </div>
                                                    <div className="about-page-req-value">
                                                        {rowItem.value}
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                                <div className="about-page-req-download-wrap">
                                    <Link className='about-page-req-download-btn' to={'#'} target={'_blank'}>Скачать реквизиты</Link>
                                </div>
                            </React.Fragment>
                        : null}

                        {activeTab.name === 'address' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                                <div className="about-page-contacts-row">
                                    <div className="about-page-worktime-wrap">
                                        <h4>Рабочее время</h4>
                                        <ul>
                                            <li>Офис: пн-пт с 10:00 до 18:00</li>
                                            <li>Производство: пн-вс с 8:00 до 22:00</li>
                                        </ul>
                                        <h4>Телефоны</h4>
                                        <ul>
                                            <li><Link to={`tel:+7812363061`}>+7 (812) 363-07-14</Link></li>
                                            <li><Link to={`tel:+79643637272`}>+7 (964)-363-72-72</Link></li>
                                        </ul>
                                        <h4>Мессаджеры</h4>
                                        <ul className="about-page-contacts-social">
                                            <li><Link className="about-page-social-img"><img src={telegram} alt="telegram cosmtech" /></Link></li>
                                            <li><Link className="about-page-social-img"><img src={whatsapp} alt="whatsapp cosmtech" /></Link></li>
                                        </ul>
                                        <h4>Соцсети</h4>
                                        <ul className="about-page-contacts-social">
                                            <li><Link className="about-page-social-img"><img src={vkIcon} alt="vk cosmtech" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="about-page-tab-map-wrap">
                                        <h4>Адрес производства</h4>
                                        <p>Санкт-Петербург, ул Салова 27 АБ <Link>Проложить маршрут</Link></p>
                                        <YandexMap />
                                    </div>
                                </div>
                            </React.Fragment>
                        : null}
                    </div>
                : null}
               
                </div>
                
            </div>
        </React.Fragment>
    )
};


export default AboutTabs;