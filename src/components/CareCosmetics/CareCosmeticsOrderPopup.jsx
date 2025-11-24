import React from "react";

const CareCosmeticsOrderPopup = (props) => {
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-order-popup-wrap">
                <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                    <span 
                        className="decorative-cosmetic-consult-popup-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="decorative-cosmetic-order-popup-body">
                    <div className="decorative-cosmetic-order-popup-title">
                        <h3>Запросить рассчет</h3>
                    </div>
                    <div className="decorative-cosmetic-order-form-wrap">
                        <div className="decorative-cosmetic-order-form-input-wrap">
                            <div className="decorative-cosmetic-order-form-input-title-wrap">
                                <label htmlFor="decorative-cosmetic-order-form-input-1">Имя</label>
                            </div>
                            <input className="" id="decorative-cosmetic-order-form-input-1" type="text" placeholder="Ваше имя" />
                        </div>
                        <div className="decorative-cosmetic-order-form-input-wrap">
                            <div className="decorative-cosmetic-order-form-input-title-wrap">
                                <label htmlFor="decorative-cosmetic-order-form-input-2">Телефон</label>
                            </div>
                            <input className="" id="decorative-cosmetic-order-form-input-2" type="text" placeholder="8xxxxxxxxxx" />
                        </div>
                        <div className="decorative-cosmetic-order-form-input-wrap">
                            <div className="decorative-cosmetic-order-form-input-title-wrap">
                                <label htmlFor="decorative-cosmetic-order-form-input-3">Email</label>
                            </div>
                            <input className="" id="decorative-cosmetic-order-form-input-3" type="text" placeholder="demo@....ru" />
                        </div>
                        <div className="decorative-cosmetic-order-form-input-wrap">
                            <div className="decorative-cosmetic-order-form-file-input">
                                <label className="input-file">
                                    <span className="input-file-text" type="text"></span>
                                    <input type="file" name="file" value="" />
                                    <span className="input-file-btn">Прикрепить ТЗ</span>
                                    <span className="input-file-display-name"></span>
                                </label>
                            </div>
                        </div>
                        <div className="decorative-cosmetic-order-form-input-wrap">
                            <div className="decorative-cosmetic-order-form-input-wrap">
                                <div className="decorative-cosmetic-order-form-input-title-wrap">
                                    <label htmlFor="decorative-cosmetic-order-form-input-5">Комментарий</label>
                                </div>
                                <textarea className="" id="decorative-cosmetic-order-form-input-5" placeholder="Комментарий...."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-mode-decor-cosmetic-get-consult-checkbox">
                        <input type="checkbox" id="decor-cosmetic-consult-checkbox" class="decor-cosmetic-get-consult-checkbox" />
                        <label htmlFor="decor-cosmetic-consult-checkbox"></label>
                        <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                    </div>
                    <div className="decorative-cosmetic-order-form-btn-wrap">
                        <a className="decorative-cosmetic-order-form-btn btnDisabled">Отправить</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CareCosmeticsOrderPopup;