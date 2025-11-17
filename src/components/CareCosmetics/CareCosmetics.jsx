import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cosmeticTypesImg from '../../img/decoraticeCosmeticsImages/decorativeCosmeticType.jpg';
import careImgTest from '../../img/careCosmeticsImages/test.jpg';
import decorativeCosmeticBrand from '../../img/decoraticeCosmeticsImages/decorativeStm.jpg';

import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import TrueZnak from "../TrueZnak/TrueZnak";

const CareCosmetics = () => {

    const careCosmeticState = useSelector((state) => state.innerPage.careCosmetic);
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Производимая уходовая косметика</h2>
                        </div>

                        <div className="decorative-cosmetics-types-row">
                            
                           
                            <div className="decorative-cosmetics-types-items-row">
                                {careCosmeticState.cosmeticTypes.map((cosmeticItem) => {
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
                                    <img src={careImgTest} alt="Производимая уходовая косметика на производстве ООО Космотех" />
                                </div>
                                <div className="decorative-cosmetics-types-btn-wrap">
                                    <Link 
                                        to={'#'} 
                                        className="decorative-cosmetics-types-btn"
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
                                    Лаборатория "Космотех" предлагает услуги по созданию уходовой косметики под вашим брендом.
                                    Разработаем для вас новые или доработаем имеющиеся рецептуры.     
                                </p>
                            
                                <p>
                                    Специалисты компании помогут вам выбрать текстуру, цвет и аромат для вашей продукции, а также подберут упаковку у проверенных поставщиков.
                                </p>
                                <p>Для снижения ваших рисков вы можете заказать небольшую партию для тестирования рынка, 
                                минимальный объем заказа на производстве - 50 кг. Вы можете скачать и заполнить ТЗ, после чего отправить его нам удобным для вас способом или через форму.</p>
                                <p>Мы готовы ответить на любые вопросы по техпроцессу, выборе сырья, срокам, упаковке и доставке, 
                                    а также проконсультировать по вопросам реализации.
                                </p>
                                <div className="decorative-cosmetics-btns-row">
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link 
                                            to={'#'} 
                                            className="decorative-cosmetics-btn"
                                        >Запросить рассчет</Link>
                                    </div>
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link 
                                            to={'/static/media/tz_template.docx'} 
                                            className="decorative-cosmetics-btn"
                                            download={true}
                                            target={'_blank'}
                                        >Скачать ТЗ</Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="decorative-cosmetics-information-image-wrap">
                                <img src={decorativeCosmeticBrand} alt="Контрактное производство декоративной косметики" />
                            </div>
                        </div>
                    </div>
                </section>
                <TrueZnak />

                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Порядок работы</h2>
                        </div>
                        <div className="decorative-cosmetics-how-to-work-row">
                            {careCosmeticState.howToWorkIcons.map((iconItem) => {
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
            </div>
        </React.Fragment>
    )
};

export default CareCosmetics;