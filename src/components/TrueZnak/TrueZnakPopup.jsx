import React from "react";

const TrueZnakPopup = (props) => {
    return (
        <React.Fragment>
            <div className="popup-znak-background-wrap">
                <div className="popup-znak-wrap">
                    <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                        <span 
                            className="sticky-sidemenu-tz-popup-close-btn"
                            onClick={props.closeHandler}
                        ></span>
                    </div>
                    <div className="popup-znak-body">
                        <h3>Консультация по «ЧЗ»</h3>

                        <form>
                            <label>Имя</label>
                            <div className="znak-form-input-wrap">
                                <input type="text" />
                            </div>
                            <label>Телефон</label>
                            <div className="znak-form-input-wrap">
                                <input type="text" />
                            </div>
                            <div className="popup-znak-checkbox-wrap">
                                <div className="form-mode-checkbox">
                                    <input type="checkbox" id="popup-znak-policy" className="popup-znak-policy" />
                                    <label htmlFor="popup-znak-policy"></label>
                                    <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                                </div>
                            </div>
                            <div className="znak-form-send-btn-wrap">
                                <span className="znak-form-send-btn">Отправить</span>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default TrueZnakPopup;