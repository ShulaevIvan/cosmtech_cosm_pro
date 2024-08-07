import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { 
    serviceShowBtn, 
    showAllServices, 
    serviceOrderPopup,
    selectServiceOptionMainPage 
} from "../../redux/slices/mainPageSlice";


import getPopupCords from "../../functions/getPopupCords";
import ServicesMainPagePopup from "../ServiceMainPagePopup/ServiceMainPagePopup";

const ServicesMainPage = () => {

    const dispatch = useDispatch();
    const servicesState = useSelector((state) => state.mainPage.services);
    const mouseCords = useSelector((state) => state.mainPage.mouseCords);

    const serviceBtnHandler = (service, status) => {
        dispatch(serviceShowBtn({status: status, targetId: service.id}));
    };

    const showAllServicesHandler = (status) => {
        dispatch(showAllServices({status: status}));
    };

    const serviceOrderPopupHandler = (e, status, service) => {
        if (status && service) {
            dispatch(selectServiceOptionMainPage({optionName: service.name}));
        }
        const cords = getPopupCords(e.pageX, e.pageY, e.target.offsetLeft, e.target.offsetTop);
        dispatch(serviceOrderPopup({status: status, left: cords.left, top: cords.top}));
        
    };

    useEffect(() => {
        dispatch(showAllServices({status: false}));
    }, []);
    
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
                                <p>Наша экспертиза позволяет нам создавать разнообразные и качественные средства для ухода за кожей и волосами.
                                </p>
                            </div>
                        </div>

                        <div className="services-main-row">
                            {servicesState.servicePopupShow ? 
                                <ServicesMainPagePopup 
                                    popupHandler={serviceOrderPopupHandler} 
                                    serviceState={servicesState} 
                                    cords={mouseCords}
                                /> 
                            : null}
                            {Array.from(servicesState.servicesItems).map((serviceItem) => {
                                return (
                                    <React.Fragment key={serviceItem.id}>
                                        <div 
                                            className={serviceItem.amimate ? "services-main-item service-main-item-animate" : "services-main-item"}
                                            onMouseOver={() => serviceBtnHandler(serviceItem, 'show')}
                                            onMouseLeave={() => serviceBtnHandler(serviceItem, 'reset')}
                                        >
                                            <div className="service-background-wrap">
                                                <img src={serviceItem.serviceImg} alt={serviceItem.altName}/>
                                                {serviceItem.serviceOrderActive ? 
                                                    <div className="service-background-order-btn-wrap">
                                                        <span
                                                            onClick={(e) => serviceOrderPopupHandler(e, true, serviceItem)}
                                                            className="service-background-order-btn">Рассчитать стоимость</span>
                                                    </div>
                                                : null}
                                                <div className="service-name-wrap">
                                                    <h3 className="off-color-title">{serviceItem.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>

                        <div className="services-view-all-btn-wrap-btn-wrap">
                            <span className="services-view-all-btn-text">Посмотрите все наши продукты</span>
                            <span 
                                className="services-view-all-services-btn"
                                onClick={() => showAllServicesHandler(servicesState.showAll ? false : true)}
                            >{servicesState.showAllBtnText}</span>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ServicesMainPage;