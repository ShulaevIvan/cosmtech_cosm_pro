import React from "react";
import { Link } from "react-router-dom";
import promo_video from '../../video/compress_promo_video.mp4';
import aboutIcon from '../../img/about_icon.png';

const AboutVideoPrezentation = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-company-prezentation-row">
                    <div className="about-company-text-content-wrap">
                        <div className="about-company-title-wrap">
                            <h2>Преимщества работы с нами</h2>
                        </div>
                        <div className="about-company-icons-row">
                            <div className="about-company-icon-item">
                                <div className="about-company-icon">
                                    <img src={aboutIcon} alt="#" />
                                </div>
                                <div className="about-company-icon-text">Легкий старт</div>
                            </div>
                            <div className="about-company-icon-item">
                                <div className="about-company-icon">
                                    <img src={aboutIcon} alt="#" />
                                </div>
                                <div className="about-company-icon-text">Гибкие условия</div>
                            </div>
                            <div className="about-company-icon-item">
                                <div className="about-company-icon">
                                    <img src={aboutIcon} alt="#" />
                                </div>
                                <div className="about-company-icon-text">Высокая маржинальность</div>
                            </div>
                            <div className="about-company-icon-item">
                                <div className="about-company-icon">
                                    <img src={aboutIcon} alt="#" />
                                </div>
                                <div className="about-company-icon-text">Стабильное качество</div>
                            </div>
                        </div>

                        <div className="about-company-prezentation-btn-row">
                            <div className="about-company-prezentation-link-wrap">
                                <Link 
                                    className="about-company-prezentation-btn"
                                    target={'_blank'}
                                >Презентация</Link>
                            </div>
                        </div>
                    </div>
                    <div className="about-company-video-content-wrap">
                        <div className="about-company-video-wrap">
                            <video controls>
                                <source src={promo_video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default AboutVideoPrezentation;