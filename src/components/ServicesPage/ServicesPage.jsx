import React, { useEffect } from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ServicePopup from "../ServicePopup/ServicePopup";

import { useSelector, useDispatch } from "react-redux";
import { servicePageOrderPopup } from "../../redux/slices/innerPageSlice";

const ServicesPage = () => {
    const dispatch = useDispatch();
    const servicesState = useSelector((state) => state.innerPage.servicesPage);

    const servicePopupHandler = (status) => {
        dispatch(servicePageOrderPopup({status: status}))
    };

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
            <section>
                <div className="container">
                    <div className="main-services-wrap">
                        {servicesState.servicesItems.map((serviceItem) => {
                            return (
                                <React.Fragment key={serviceItem.id}>
                                    {servicesState.serviceFormActive ?  <ServicePopup formHandler={servicePopupHandler} /> : null}
                                    <div className={serviceItem.position === 'left' ? 
                                        'main-service-item-row slide-left' : "main-service-item-row reverseService slide-right"}>
                                        <div className="main-service-img-box">
                                            <div className="main-service-img-wrap">
                                                <img src={serviceItem.image} alt={serviceItem.name} />
                                            </div>
                                        </div>
                                        <div className="main-service-description-box">
                                            <div className={`main-service-content main-service-content-align-${serviceItem.position}`}>
                                                <h2>{serviceItem.name}</h2>
                                                <p>{serviceItem.description}</p>
                                                <p>
                                                    Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                                    когда нужно быстро заполнить макеты или прототипы содержимым
                                                </p>
                                                <div className="main-service-order-btn-wrap">
                                                    <span onClick={() => servicePopupHandler(true)} className="main-service-order-btn">Заказать</span>
                                                </div>
                                            </div>
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

export default ServicesPage;