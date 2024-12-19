import React from "react";
import { Link } from "react-router-dom";
import aboutIcon from '../../img/about_icon.png';
import aboutType from '../../img/test1234.jpg'

const ProductionTypes = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-company-production-title-wrap">
                    <h2>Типы выпускаемой продукции</h2>
                </div>
                <div className="about-company-production-row">
                    <div className="about-company-production-goods-row">
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Гели
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Крема
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Шампуни
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Сыворотки
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Маски
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Дезодоранты
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Бальзамы
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Обертывания
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Баттеры
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Пиллинги
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Эмульсии
                            </div>
                        </div>
                        <div className="about-company-production-good-item-row">
                            <div className="about-company-production-good-item-icon">
                                <img src={aboutIcon} alt="#" />
                            </div>
                            <div className="about-company-production-good-item-text">
                                Гидролат
                            </div>
                        </div>
                    </div>
                    <div className="about-company-production-photo">
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
        </React.Fragment>
    )
};

export default ProductionTypes;