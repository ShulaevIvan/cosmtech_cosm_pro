import React from "react";
import imgHolder250 from '../../img/250.png';

const ServicesMainPage = () => {
    return (
        <React.Fragment>
            <section>
                <div class="container">
                    <div class="services-main-wrap">
                        <div class="container-center">
                            <div class="services-mainpage-title-wrap">
                                <h2 class="main-color-title">Что мы производим</h2>
                            </div>
                            <div class="services-mainpage-description-wrap">
                                <p>
                                    Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста.
                                </p>
                            </div>
                        </div>

                        <div class="services-main-row">
                            <div class="services-main-item">
                                <div class="service-background-wrap">
                                    <div class="service-background-title">
                                        <h4 class="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder1"/>
                                    <div class="service-background-order-btn-wrap">
                                        <span class="service-background-order-btn">Рассчитать стоимость</span>
                                    </div>
                                </div>
                            </div>
                            <div class="services-main-item">
                                <div class="service-background-wrap">
                                    <div class="service-background-title">
                                        <h4 class="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder2"/>
                                </div>
                            </div>
                            <div class="services-main-item">
                                <div class="service-background-wrap">
                                    <div class="service-background-title">
                                        <h4 class="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder3"/>
                                </div>
                            </div>
                            <div class="services-main-item">
                                <div class="service-background-wrap">
                                    <div class="service-background-title">
                                        <h4 class="off-color-title">Product Title</h4>
                                    </div>
                                    <img src={imgHolder250} alt="holder4"/>
                                </div>
                            </div>
                        </div>

                        <div class="services-view-all-btn-wrap-btn-wrap">
                            <span class="services-view-all-btn-text">Посмотрите все наши продукты</span>
                            <span class="services-view-all-services-btn">Все продукты</span>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ServicesMainPage;