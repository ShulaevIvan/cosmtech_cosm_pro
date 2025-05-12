import React from "react";
import { Link } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import logoStm from '../../img/customTm/logo_new.png';
import demoImg from '../../img/customTm/demoImg.png';
import demoVideo from '../../video/compress_promo_video.mp4';

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
                                    <div className="custom-tm-more-btn-wrap">
                                        <Link href="#">подробнее</Link>
                                    </div>
                                    <div className="custom-tm-more-content-wrap">
                                        <div className="custom-tm-gallery-wrap">
                                            <h3>Примеры продукции</h3>
                                            <div className="custom-tm-galley-row">
                                                <div className="custom-tm-galley-item">
                                                    <Link><img src={demoImg} alt="#" /></Link> 
                                                </div>
                                                <div className="custom-tm-galley-item">
                                                    <Link><img src={demoImg} alt="#" /></Link> 
                                                </div>
                                                <div className="custom-tm-galley-item">
                                                    <Link><img src={demoImg} alt="#" /></Link> 
                                                </div>
                                                <div className="custom-tm-galley-item">
                                                    <Link><img src={demoImg} alt="#" /></Link> 
                                                </div>
                                                <div className="custom-tm-galley-item">
                                                    <Link><img src={demoImg} alt="#" /></Link> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom-tm-video-wrap">
                                            <h3>Промовидео</h3>
                                            <video controls>
                                                <source src={demoVideo} type='video/mp4;' />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-tm-item-stats">
                                    <div className="custom-tm-item-logo-row">
                                        <div className="custom-tm-item-logo">
                                            <img src={logoStm} alt="#" />
                                        </div>
                                    </div>
                                    <div className="custom-tm-item-promo-row">
                                        <div className="custom-tm-prezentation">Презентация: <Link>скачать</Link></div>
                                        <div className="custom-tm-site">Сайт: <Link>smprof.ru</Link></div> 
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