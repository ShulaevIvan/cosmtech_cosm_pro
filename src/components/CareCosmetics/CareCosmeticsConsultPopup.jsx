import React from "react";

const CareCosmeticsConsultPopup = (props) => {
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-consult-popup-wrap">
                <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                    <span 
                        className="decorative-cosmetic-consult-popup-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="decorative-cosmetic-consult-popup-body">
                    <h3>Получить консультацию</h3>
                </div>
                <div className="decorative-cosmetic-consult-popup-form-wrap">
                    <label htmlFor="decorative-cosmetic-consult-popup-form-input-1">Имя</label>
                    <div className="decorative-cosmetic-consult-popup-form-input">
                        <input className="" id="decorative-cosmetic-consult-popup-form-input-1" type="text" placeholder="Ваше имя" />
                    </div>
                    <label htmlFor="decorative-cosmetic-consult-popup-form-input-2">Телефон</label>
                    <div className="decorative-cosmetic-consult-popup-form-input">
                        <input className="" id="decorative-cosmetic-consult-popup-form-input-2" type="text" placeholder="8xxxxxxxxxx" />
                    </div>
                    <label htmlFor="decorative-cosmetic-consult-popup-form-input-3">Email</label>
                    <div className="decorative-cosmetic-consult-popup-form-input">
                        <input className="" id="decorative-cosmetic-consult-popup-form-input-3" type="text" placeholder="demo@....ru" />
                    </div>
                </div>
                <div className="decor-cosmetic-get-consult-checkbox-wrap">
                    <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                        <input type="checkbox" id="decor-cosmetic-consult-checkbox" className="decor-cosmetic-get-consult-checkbox" />
                        <label htmlFor="decor-cosmetic-consult-checkbox"></label>
                        <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                    </div>
                </div>
                <div className="decorative-cosmetic-consult-popup-form-send-btn-wrap">
                    <a className="decorative-cosmetic-consult-popup-form-send-btn btnDisabled" href="/decorative-cosmetics">Отправить</a>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CareCosmeticsConsultPopup;