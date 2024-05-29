import React from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ServicePopup from "../ServicePopup/ServicePopup";

import serviceImg from '../../img/575x400.png';

const ServicesPage = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />
            <ServicePopup />
            <div class="inner-page-main-wrapper">
            <section>
                <div className="container">
                    <div className="main-services-wrap">

                        <div className="main-service-item-row">
    
                            <div className="main-service-img-box">
                                <div className="main-service-img-wrap">
                                    <img src={serviceImg} alt="serviceImg" />
                                </div>
                            </div>
    
                            <div className="main-service-description-box">
                                <div className="main-service-content main-service-content-align-left">
                                    <h2>Текст-рыба на русском языке</h2>
                                    <p>
                                        Мы любим животных и стараемся поддерживать тех из них, 
                                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                                    </p>
                                    <p>
                                        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                        когда нужно быстро заполнить макеты или прототипы содержимым
                                    </p>
                                    <div className="main-service-order-btn-wrap">
                                        <span className="main-service-order-btn">Заказать</span>
                                    </div>
                                </div>
                                
                               
                            </div>
                        </div>
                        
                        <div className="main-service-item-row">
                            <div className="main-service-description-box">
                                <div className="main-service-content main-service-content-align-right">
                                    <h2>Текст-рыба на русском языке</h2>
                                    <p>
                                        Мы любим животных и стараемся поддерживать тех из них, 
                                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                                    </p>
                                    <p>
                                        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                        когда нужно быстро заполнить макеты или прототипы содержимым
                                    </p>
                                    <div class="main-service-order-btn-wrap">
                                        <span class="main-service-order-btn">Заказать</span>
                                    </div>
                                </div>
                               
                               
                            </div>
    
                            <div className="main-service-img-box">
                                <div className="main-service-img-wrap">
                                    <img src={serviceImg} alt="serviceImg" />
                                </div>
                            </div>
                        </div>
    
                        <div className="main-service-item-row">
    
                            <div className="main-service-img-box">
                                <div className="main-service-img-wrap">
                                    <img src={serviceImg} alt="serviceImg" />
                                </div>
                            </div>
    
                            <div className="main-service-description-box">
                                <div className="main-service-content main-service-content-align-left">
                                    <h2>Текст-рыба на русском языке</h2>
                                    <p>
                                        Мы любим животных и стараемся поддерживать тех из них, 
                                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                                    </p>
                                    <p>
                                        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                        когда нужно быстро заполнить макеты или прототипы содержимым
                                    </p>
                                    <div class="main-service-order-btn-wrap">
                                        <span class="main-service-order-btn">Заказать</span>
                                    </div>
                                </div>
                                
                               
                            </div>
                        </div>
    
                        <div className="main-service-item-row">
                            <div className="main-service-description-box">
                                <div className="main-service-content main-service-content-align-right">
                                    <h2>Текст-рыба на русском языке</h2>
                                    <p>
                                        Мы любим животных и стараемся поддерживать тех из них, 
                                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                                    </p>
                                    <p>
                                        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                        когда нужно быстро заполнить макеты или прототипы содержимым
                                    </p>
                                    <div className="main-service-order-btn-wrap">
                                        <span className="main-service-order-btn">Заказать</span>
                                    </div>
                                </div>
                                
                               
                            </div>
    
                            <div className="main-service-img-box">
                                <div className="main-service-img-wrap">
                                    <img src={serviceImg} alt="serviceImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </section>
            </div>
        </React.Fragment>
    )
};

export default ServicesPage;