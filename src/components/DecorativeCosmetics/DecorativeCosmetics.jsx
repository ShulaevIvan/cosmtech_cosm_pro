import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";

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
                                <div className="decorative-cosmetics-types-image-wrap">
                                    <img src="#" alt="#" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="decorative-cosmetics-how-to-work-row">
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Отправляете заявку
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Получение консультации и заполнение брифа
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Расчет себестоимости
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Создание рецептуры
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Доставка и отгрузка
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Сертификация
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Разработка продукта
                                </div>
                            </div>
                            <div className="decorative-cosmetics-how-to-work-item-wrap">
                                <div className="decorative-cosmetics-how-to-work-item-icon">
                                    <img src="#" />
                                </div>
                                <div className="decorative-cosmetics-how-to-work-item-text">
                                    Закупка необходимого сырья
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        capability
                    </div>
                </section>
                <section>
                    <div className="container">
                        FAQ
                    </div>
                </section>
                <section>
                    <div className="container">
                        FORM
                    </div>
                </section>
            </div>
            
        </React.Fragment>
    )
};

export default DecorativeCosmetics;