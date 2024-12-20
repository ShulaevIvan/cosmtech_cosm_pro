import React from "react";
import { Link } from "react-router-dom";
import aboutIcon from '../../img/about_icon.png';
import aboutType from '../../img/test1234.jpg'

const ProductionTypes = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-company-production-title-wrap">
                    <h2>Типы производимой продукции</h2>
                </div>
                <div className="about-company-production-row">
                    <div className="about-company-production-goods-row">
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Средства по уходу за лицом
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Средства для укладки волос
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Средства по уходу за волосами
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Средства по уходу за телом
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Средства по уходу за руками
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Средства по уходу за ногами
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Косметика для детей
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Солнцезащитная косметика
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Косметика для мужчин
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Косметика для животных
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Профессиональная косметика
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Косметика для салонов красоты
                            </div>
                        </div>
                    </div>
                    <div className="about-company-production-photo">
                        <div className="about-company-production-photo-wrap">
                            <img src={aboutType} alt={'test'} />
                        </div>
                        <div className="about-company-production-consult-row">
                            <Link 
                                className="about-company-production-consult-btn"
                                target={'_blank'}
                            >Узнать больше</Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductionTypes;