import React from "react";
import imgHolder250 from '../../img/250.png';

const ServicesMainPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="services-main-wrap">
                        <div className="container-center">
                            <div className="services-mainpage-title-wrap">
                                <h2 className="main-color-title">Что мы производим</h2>
                            </div>
                            <div className="services-mainpage-description-wrap">
                                <p>
                                    Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста.
                                </p>
                            </div>
                        </div>

                        <div className="services-main-row">
                            <div className="services-main-item">
                                <div className="service-background-wrap">
                                    <div className="service-background-title">
                                        <h4 className="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder1"/>
                                    <div className="service-background-order-btn-wrap">
                                        <span className="service-background-order-btn">Рассчитать стоимость</span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-main-item">
                                <div className="service-background-wrap">
                                    <div className="service-background-title">
                                        <h4 className="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder2"/>
                                </div>
                            </div>
                            <div className="services-main-item">
                                <div className="service-background-wrap">
                                    <div className="service-background-title">
                                        <h4 className="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder3"/>
                                </div>
                            </div>
                            <div className="services-main-item">
                                <div className="service-background-wrap">
                                    <div className="service-background-title">
                                        <h4 className="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder4"/>
                                </div>
                            </div>
                        </div>

                        <div className="services-view-all-btn-wrap-btn-wrap">
                            <span className="services-view-all-btn-text">Посмотрите все наши продукты</span>
                            <span className="services-view-all-services-btn">Все продукты</span>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ServicesMainPage;