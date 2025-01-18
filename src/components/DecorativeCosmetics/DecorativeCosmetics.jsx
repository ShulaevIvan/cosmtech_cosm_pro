import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ExcursionToProduction from "../ExcursionToProduction/ExcursionToProduction";
import DecorativeCosmeticsConsultPopup from "./DecorativeCosmeticsConsultPopup";

import { 
    decorCosmConsultPopup 
} from "../../redux/slices/innerPageSlice";

import demo from '../../img/decoraticeCosmeticsImages/decorative.png';

const DecorativeCosmetics = () => {
    const decorativeCosmState = useSelector((state) => state.innerPage.decorativeCosmeticsPage);
    const dispatch = useDispatch();

    const decorCosmeticPopupHandler = () => {
        dispatch(decorCosmConsultPopup());
    };

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Производимая декоративная косметика</h2>
                        </div>
                        <div className="decorative-cosmetics-types-row">
                            {decorativeCosmState.consultPopup.active ? 
                                <DecorativeCosmeticsConsultPopup
                                    popupState={decorativeCosmState.consultPopup}
                                    popupHandler={decorCosmeticPopupHandler}
                                />
                            : null}
                           
                            <div className="decorative-cosmetics-types-items-row">
                                {decorativeCosmState.cosmeticTypes.map((cosmeticItem) => {
                                    return (
                                        <React.Fragment key={cosmeticItem.id}>
                                            <div className="decorative-cosmetics-type-item-row">
                                                <div className="decorative-cosmetics-type-item-icon">
                                                    <img src={cosmeticItem.img} alt={cosmeticItem.imgAlt} />
                                                </div>
                                                <div className="decorative-cosmetics-type-item-text">
                                                    {cosmeticItem.name}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div className="decorative-cosmetics-types-image-wrap">
                                <div className="decorative-cosmetics-types-photo-wrap">
                                    <img src={demo} alt="#" />
                                </div>
                                <div className="decorative-cosmetics-types-btn-wrap">
                                    <Link 
                                        to={'#'} 
                                        className="decorative-cosmetics-types-btn"
                                        onClick={decorCosmeticPopupHandler}
                                    >Получить консультацию</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Косметика под вашим брендом</h2>
                        </div>
                        <div className="decorative-cosmetics-information-row">
                           
                            <div className="decorative-cosmetics-information-text-wrap">
                                <p>
                                    Лаборатория "Космотех" предлагает услуги по созданию декоративной косметики под вашим брендом.
                                    Разработаем новые или доработаем существующие рецептуры. 
                                    
                                </p>
                            
                                <p>
                                    Специалисты компании помогут вам выбрать текстуру, цвет и аромат для вашей продукции, а также подберут упаковку у проверенных поставщиков.
                                </p>
                                <p>Для снижения ваших рисков вы можете заказать небольшую партию для тестирования рынка, 
                                минимальный объем заказа на производстве - 50 кг.</p>
                                <p>Мы готовы ответить на любые вопросы по техпроцессу, выборе сырья, срокам, упаковке и доставке, 
                                    а также проконсультировать по вопросам реализации.
                                </p>
                                <div className="decorative-cosmetics-btns-row">
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link to={'#'} className="decorative-cosmetics-btn">Запросить рассчет</Link>
                                    </div>
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link to={'#'} className="decorative-cosmetics-btn">Скачать ТЗ</Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="decorative-cosmetics-information-image-wrap">
                                <img src={demo} alt="#" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Порядок работы</h2>
                        </div>
                        <div className="decorative-cosmetics-how-to-work-row">
                            {decorativeCosmState.howToWorkIcons.map((iconItem) => {
                                return (
                                    <React.Fragment key={iconItem.id}>
                                        <div className="decorative-cosmetics-how-to-work-item-wrap">
                                            <div className="decorative-cosmetics-how-to-work-item-icon">
                                                <img src={iconItem.img} alt={iconItem.imgAlt} />
                                            </div>
                                            <div className="decorative-cosmetics-how-to-work-item-text">
                                                {iconItem.name}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <ExcursionToProduction />
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Часто задаваемые вопросы</h2>
                        </div>
                        {decorativeCosmState.faqQuestions.map((faqItem) => {
                            return (
                                <React.Fragment key={faqItem.id}>
                                    <div className={faqItem.active ? "for-clients-faq-accordion-item active" : "for-clients-faq-accordion-item"}>
                                        <div 
                                            className="for-clients-faq-accordion-item-title" 
                                        >
                                            <h4>{faqItem.ask}</h4>
                                        </div>
                                        <div 
                                            className="for-clients-faq-accordion-item-btn-wrap"
                                            
                                        >
                                            <span className={faqItem.active ? 
                                                "for-clients-faq-accordion-item-btn active" : "for-clients-faq-accordion-item-btn"}
                                            ></span>
                                        </div>
                                        <div className={faqItem.active ? 
                                            'for-clients-faq-accordion-item-description active' : 'for-clients-faq-accordion-item-description'}>
                                            <p>{faqItem.ans}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="decorative-cosmetics-consult-form-wrap">
                            <h3>Остались вопросы?</h3>
                            <p>Вы сможете задать их относительно наших услуг заполнив форму.</p>
                            <div className="decorative-cosmetics-consult-form">
                                <div className="decorative-cosmetics-consult-form-input-wrap">
                                    <div className="decorative-cosmetics-consult-form-input-wrap">
                                        <label>Имя</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="decorative-cosmetics-consult-form-input-wrap">
                                    
                                    <div className="decorative-cosmetics-consult-form-input-wrap">
                                        <label>Телефон</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="decorative-cosmetics-consult-form-input-wrap">
                                    <div className="decorative-cosmetics-consult-form-input-wrap">
                                        <label>Email</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="decorative-cosmetics-consult-form-btn-wrap">
                                    <span to={'#'} className="decorative-cosmetics-consult-form-btn">Отправить</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </React.Fragment>
    )
};

export default DecorativeCosmetics;