import React from "react";

const ContractDesignPopup = () => {
    return (
        <React.Fragment>
            <div className="popup-design-service-background-wrap">
                <div className="popup-design-service-wrap">
                    <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                        <span className="sticky-sidemenu-tz-popup-close-btn"></span>
                    </div>
                    <div className="popup-design-service-body">
                        <form>
                            <label htmlFor="popup-design-service-input-name">Имя</label>
                            <div className="popup-design-service-input-wrap">
                                <input type="text" placeholder="test" id="popup-design-service-input-name" />
                            </div>
                            <label htmlFor="popup-design-service-input-phone">Телефон</label>
                            <div className="popup-design-service-input-wrap">
                                <input type="text" placeholder="test"  id="popup-design-service-input-phone" />
                            </div>
                            <label id="popup-design-service-input-email">Услуга</label>
                            <div className="popup-design-service-select-wrap">
                                <select>
                                    <option>Запуск бренда с нуля</option>
                                    <option>Услуги по дизайну</option>
                                    <option>Фото/Видео съемка</option>
                                </select>
                            </div>
                            <div className="popup-design-service-checkbox-wrap">
                                <div className="form-mode-checkbox">
                                    <input type="checkbox" id="popup-service-design-service-policy" className="popup-service-design-service-policy" />
                                    <label for="popup-service-design-service-policy"></label>
                                    <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                                </div>
                            </div>
                        </form>
                        <div className="popup-design-service-order-btn-wrap">
                            <span className="popup-design-service-order-btn">Отправить</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContractDesignPopup;