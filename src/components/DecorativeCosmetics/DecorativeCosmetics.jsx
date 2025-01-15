import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import demo from '../../img/decoraticeCosmeticsImages/decorative.png';

const DecorativeCosmetics = () => {
    const decorativeCosmState = useSelector((state) => state.innerPage.decorativeCosmeticsPage);
    const dispatch = useDispatch();

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
                                    <a href="#" className="decorative-cosmetics-types-btn">Получить консультацию</a>
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
                                    а также можем проконсультировать по вопросам реализации.
                                </p>
                                <div className="decorative-cosmetics-btns-row">
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <a className="decorative-cosmetics-btn">Отправить заявку</a>
                                    </div>
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <a className="decorative-cosmetics-btn">Скачать ТЗ</a>
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
                    <div className="about-company-production-title-wrap">
                        <h2>Экскурсия на производство</h2>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Часто задаваемые вопросы</h2>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Отправить заявку</h2>
                        </div>
                    </div>
                </section>
            </div>
            
        </React.Fragment>
    )
};

export default DecorativeCosmetics;