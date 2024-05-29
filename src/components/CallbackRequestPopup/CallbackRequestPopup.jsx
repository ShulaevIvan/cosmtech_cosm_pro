import React from "react";

const CallbackRequestPopup = (props) => {
    return (
        <React.Fragment>
            <div className="callback-request-popup">
                <div className="callback-request-popup-close">
                    <span 
                        class="close-popup-btn"
                        onClick={() => props.callbackPopupHander(false)}
                    ></span>
                </div>
                <div className="callback-request-popup-title">
                    <h3>Перезвоните мне</h3>
                </div>
                <div className="callback-request-popup-from-wrap">
                    <form>
                        <div className="callback-request-inputs-row">
                            <div className="callback-input-wrap">
                                <div className="callback-input-title">Имя</div>
                                <input type="tel" />
                            </div>
                            <div className="callback-input-wrap">
                                <div className="callback-input-title">Телефон</div>
                                <input type="tel" />
                            </div>
                        </div>
                    </form>
                    <div className="callback-from-btn-wrap">
                        <span className="callback-send-btn">Отправить</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CallbackRequestPopup;