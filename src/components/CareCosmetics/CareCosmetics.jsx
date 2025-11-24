import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import careImgTest from '../../img/careCosmeticsImages/test.jpg';
import decorativeCosmeticBrand from '../../img/decoraticeCosmeticsImages/decorativeStm.jpg';


import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import TrueZnak from "../TrueZnak/TrueZnak";
import ExcursionToProduction from "../ExcursionToProduction/ExcursionToProduction";
import CareCosmeticsConsultPopup from "./CareCosmeticsConsultPopup";
import CareCosmeticsOrderPopup  from "./CareCosmeticsOrderPopup";

import { 
    careCosmeticsConsultPopup,
    careCosmeticsOrderPopup
} from '../../redux/slices/innerPageSlice';

const CareCosmetics = () => {
    const dispatch = useDispatch();
    const careCosmeticState = useSelector((state) => state.innerPage.careCosmetic);
    const consultPopupState = useSelector((state) => state.innerPage.careCosmetic.consultPopup);
    const orderPopupState = useSelector((state) => state.innerPage.careCosmetic.orderPopup);

    const careCosmeticConsultPopupHandler = () => {
        dispatch(careCosmeticsConsultPopup());
    };

    const careCosmeticOrderPopupHandler = () => {
        dispatch(careCosmeticsOrderPopup());
    };

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
                            {consultPopupState.active ? 
                                <CareCosmeticsConsultPopup
                                    closeHandler={careCosmeticConsultPopupHandler}
                                />
                            : null}
                           
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
                                        onClick={careCosmeticConsultPopupHandler} 
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
                            {orderPopupState.active ? 
                                <CareCosmeticsOrderPopup
                                    closeHandler={careCosmeticOrderPopupHandler}
                                />
                            : null}
                            <div className="decorative-cosmetics-information-text-wrap">
                                
                                <p>
                                    Лаборатория "Космотех" предлагает услуги по контрактному производству уходовой косметики под СТМ.  
                                    Наши специалисты помогут создать новые уникальные рецептуры или доработать существующие, в зависимости от ваших задач.
                                </p>
                            
                                <p>
                                    Подберем оптимальный состав продукта и поможем выбрать подходящую упаковку у проверенных поставщиков. Брендинг и дизайн обсуждается отдельно.
                                </p>
                                <p>Минимальный объем заказа на нашем производстве составляет 50 кг. Вы можете скачать и заполнить тз (техническое задание) или отрпавить заявку  любым удобным для вас способом.</p>
                                <p>Также готовы проконсультировать по вопросам выбора сырья, срокам изготовления, стоимости, выпуска упаковки,  доставке и реализации товара.
                                </p>
                                <div className="decorative-cosmetics-btns-row">
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link 
                                            to={'#'} 
                                            className="decorative-cosmetics-btn"
                                            onClick={careCosmeticOrderPopupHandler}
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
                                <img src={decorativeCosmeticBrand} alt="Контрактное производство уходовой косметики" />
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
                <section>
                    <ExcursionToProduction />
                </section>
            </div>
        </React.Fragment>
    )
};

export default CareCosmetics;