import React from "react";

const ServicePopup = (props) => {
    return (
        <React.Fragment>
            <div className="service-popup-wrap">
                <div className="service-popup-close-wrap">
                    <span 
                        className="service-popup-close-btn"
                        onClick={() => props.formHandler(false)}
                    ></span>
                </div>
                <div className="service-popup-form-wrap">
                    <form>
                        <div className="service-form-input-wrap">
                            <div className="service-popup-form-title">
                                <label>Имя</label>
                            </div>
                            <div className="service-popup-form-title">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="service-form-input-wrap">
                            <div className="service-popup-form-title">
                                <label>Телефон</label>
                            </div>
                            <div className="service-popup-form-title">
                                <input type="tel" />
                            </div>
                        </div>
                        <div className="service-form-input-wrap">
                            <div className="service-popup-form-title">
                                <label>Email</label>
                            </div>
                            <div className="service-popup-form-title">
                                <input type="email" />
                            </div>
                        </div>
                        <div className="service-form-options-wrap">
                            <div className="service-form-options-title">Услуга</div>
                            <select name="hero">
                                <option selected>Выбранная услуга</option>
                                <option value="t1">Опция 1</option>
                                <option value="t2">Опция 2</option>
                                <option value="t3">Опция 3</option>
                                <option value="t4">Опция 4</option>
                            </select>
                        </div>
                        <div className="service-form-options-add-btn-wrap">
                            <span className="service-plus-icon"></span>
                        </div>
                        <div className="service-form-options-wrap">
                            <div className="service-form-options-title">Коментарий</div>
                            <textarea></textarea>
                        </div>
                        <div className="service-form-order-btn-wrap">
                            <span className="service-form-order-btn">Отправить</span>
                        </div>
                    
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ServicePopup;