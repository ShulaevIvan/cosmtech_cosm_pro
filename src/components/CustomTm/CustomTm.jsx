import React from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import logoStm from '../../img/customTm/logo_new.png';
import pdfIcon from '../../img/pdficon.svg';
import linkIcon from '../../img/linkicon.svg';

const CustomTm = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="custom-tms-main-column">
                            <div className="custom-tm-main-item-row">
                                <div className="custom-tm-item-content-wrap">
                                    <div className="custom-tm-item-description">
                                        <h3>SM Professional</h3>
                                        <p>Более 100 профессиональных средств для специалистов индустрии красоты, 
                                            которые решают основные эстетические проблемы кожи для всех возрастов и типов кожи. 
                                            Продукция SM professional используются в медицинских клиниках и центрах пластической хирургии, салонах красоты, 
                                            фитнес центрах.
                                        </p>
                                        <p>Продукты линии SM professional разработаны на основе широкого спектра природных компонентов в сочетании с последними достижениями биотехнологий.
                                        </p>
                                    </div>
                                    <div className="custom-tm-item-gallery">
                                        gallery
                                    </div>
                                    <div className="custom-tm-item-video">
                                        video
                                    </div>
                                </div>
                                <div className="custom-tm-item-stats">
                                    <div className="custom-tm-item-logo-row">
                                        <div className="custom-tm-item-logo">
                                            <img src={logoStm} alt="#" />
                                        </div>
                                    </div>
                                    <div className="custom-tm-item-promo-row">
                                        <div className="custom-tm-prezentation">Презентация: <a>скачать</a></div>
                                        <div className="custom-tm-site">Сайт: <a>smprof.ru</a></div> 
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

export default CustomTm;