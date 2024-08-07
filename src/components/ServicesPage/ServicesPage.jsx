import React, { useEffect } from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ServicePopup from "../ServicePopup/ServicePopup";
import { useSelector, useDispatch } from "react-redux";
import { servicePageOrderPopup } from "../../redux/slices/innerPageSlice";
import getPopupCords from "../../functions/getPopupCords";

const ServicesPage = () => {
    const dispatch = useDispatch();
    const servicesState = useSelector((state) => state.innerPage.servicesPage);
    const mouseCords = useSelector((state) => state.innerPage.mousePosition);

    const servicePopupHandler = (e, status, service) => {
        const cords = getPopupCords(e.pageX, e.pageY, e.target.offsetLeft, e.target.offsetTop);
        dispatch(servicePageOrderPopup({status: status, left: cords.left, top: cords.top, service: service ? service.name : ''}));
    };

    return (
        <React.Fragment>
            {servicesState.serviceFormActive ?  <ServicePopup formHandler={servicePopupHandler} cords={mouseCords} /> : null}
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
            <section>
                <div className="container">
                    <div className="main-services-wrap">
                        {servicesState.servicesItems.map((serviceItem) => {
                            return (
                                <React.Fragment key={serviceItem.id}>
                                    <div className={serviceItem.position === 'left' ? 
                                        'main-service-item-row slide-left' : "main-service-item-row reverseService slide-right"}>
                                        <div className={`main-service-img-box img-service-align-${serviceItem.position}`}>
                                            <div className={`main-service-img-wrap align-img-${serviceItem.position}`}>
                                                <img src={serviceItem.image} alt={serviceItem.name} />
                                            </div>
                                        </div>
                                        <div className="main-service-description-box">
                                            <div className={`main-service-content main-service-content-align-${serviceItem.position}`}>
                                                <h2>{serviceItem.name}</h2>
                                                <p>{serviceItem.description}</p>
                                                <p>
                                                    {serviceItem.descriptionMini}
                                                </p>
                                                <div className="main-service-order-btn-wrap">
                                                    <span 
                                                        onClick={(e) => servicePopupHandler(e, true, serviceItem)} 
                                                        className="main-service-order-btn"
                                                    >Заказать</span>
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