import React from "react";
import independenceIconOne from '../../img/independence_1.svg';
import independenceIconTwo from '../../img/independence_2.svg';
import independenceIconThree from '../../img/independence_3.svg';
import independenceIconFour from '../../img/independence_4.svg';
import independenceIconFive from '../../img/independence_5.svg';
import independenceIconSix from '../../img/independence_6.svg';

const IndependenceMainPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="independence-main-wrap">
                        <div className="independence-main-title-wrap">
                            <h2 className="main-color-title main-color-title">Наши Преимущества</h2>
                        </div>

                        <div className="independence-main-row">
                            <div className="independence-main-item">
                                <div className="independence-main-icon-title-wrap">
                                    <h3>Современные технологии</h3>
                                </div>
                                <div className="independence-main-icon-wrap">
                                    <img src={independenceIconOne} alt="independence" />
                                </div>
                                <div className="independence-description-wrap">
                                    <p>
                                        Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                    </p>
                                </div>
                            </div>
                            <div className="independence-main-item">
                                <div className="independence-main-icon-title-wrap">
                                    <h3>Современные технологии</h3>
                                </div>
                                <div className="independence-main-icon-wrap">
                                    <img src={independenceIconTwo} alt="independence2" />
                                </div>
                                <div className="independence-description-wrap">
                                    <p>
                                        Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                    </p>
                                </div>
                            </div>
                            <div className="independence-main-item">
                                <div className="independence-main-icon-title-wrap">
                                    <h3>Современные технологии</h3>
                                </div>
                                <div className="independence-main-icon-wrap">
                                    <img src={independenceIconThree} alt="independence3" />
                                </div>
                                <div className="independence-description-wrap">
                                    <p>
                                        Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                    </p>
                                </div>
                            </div>
                            <div className="independence-main-item">
                                <div className="independence-main-icon-title-wrap">
                                    <h3>Современные технологии</h3>
                                </div>
                                <div className="independence-main-icon-wrap">
                                    <img src={independenceIconFour} alt="independence4" />
                                </div>
                                <div className="independence-description-wrap">
                                    <p>
                                        Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                    </p>
                                </div>
                            </div>
                            <div className="independence-main-item">
                                <div className="independence-main-icon-title-wrap">
                                    <h3>Современные технологии</h3>
                                </div>
                                <div className="independence-main-icon-wrap">
                                    <img src={independenceIconFive} alt="independence4" />
                                </div>
                                <div className="independence-description-wrap">
                                    <p>
                                        Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                    </p>
                                </div>
                            </div>
                            <div className="independence-main-item">
                                <div className="independence-main-icon-title-wrap">
                                    <h3>Современные технологии</h3>
                                </div>
                                <div className="independence-main-icon-wrap">
                                    <img src={independenceIconSix} alt="independence6" />
                                </div>
                                <div className="independence-description-wrap">
                                    <p>
                                        Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="independence-main-order-form">
                            <h3 className="main-color-title">Текст-рыба на русском языке</h3>

                            <form className="contact-form-order-main">
                                <div className="contact-form-order-main-row">
                                    <div className="contact-form-order-main-item">
                                        <div className="contact-form-order-main-label-wrap">
                                            <label>Имя</label>
                                        </div>
                                        <div className="contact-form-order-main-input-wrap">
                                            <input type="text" placeholder="Имя" />
                                        </div>
                                    </div>
                                    <div className="contact-form-order-main-item">
                                        <div className="contact-form-order-main-label-wrap">
                                            <label>Телефон</label>
                                        </div>
                                        <div className="contact-form-order-main-input-wrap">
                                            <input type="tel" placeholder="+7 xxx xx xx" />
                                        </div>
                                    </div>
                                    <div className="contact-form-order-main-item contact-form-order-main-item-text">
                                        <div className="contact-form-order-main-label-wrap">
                                            <label>Сообщение</label>
                                        </div>
                                        <div className="contact-form-order-main-input-wrap">
                                            <input className="main-form-message" type="text" />
                                        </div>
                                    </div>
                                    <div className="contact-form-order-main-item-end">
                                        <div className="contact-form-order-main-btn-send">
                                            <span>Отправить</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default IndependenceMainPage;