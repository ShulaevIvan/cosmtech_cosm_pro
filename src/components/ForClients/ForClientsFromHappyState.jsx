import React from "react";

const ForClientsFormHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="for-clients-consult-form-background">
                <div className="for-clients-consult-from-row">
                    <span 
                        className="for-clients-detail-popup-close-btn"
                        onClick={() => props.closeHandler(false, props.happyStateType)}
                    ></span>
                    <div className="for-clients-happystate--message-wrap">
                        <h3>Спасибо! Запрос отправлен.</h3>
                        <p>{props.happyState.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ForClientsFormHappyState;