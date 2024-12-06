import React from "react";
import { Link } from "react-router-dom";


const ForClientsConsultForm = (props) => {
    return (
        <React.Fragment>
            <div className="for-clients-consult-form-background">
                <div className="for-clients-consult-from-row">
                    <span 
                        className="for-clients-consult-popup-close-btn"
                        onClick={() => props.popupHandler(false)}
                    ></span>
                    <div className="for-clients-consult-main-title-form">
                        <h3>Запрос на консультацию</h3>
                    </div>
                    <div className="for-clients-inputs-row">
                        <div className="for-clients-consult-input-item-wrap">
                            <div className="for-clients-consult-input-label-wrap">
                                <label>Имя</label>
                            </div>
                            <div className="for-clients-consult-input-wrap">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="for-clients-consult-input-item-wrap">
                            <div className="for-clients-consult-input-label-wrap">
                                <label>Телефон</label>
                            </div>
                            <div className="for-clients-consult-input-wrap">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="for-clients-get-consult-btn-wrap">
                        <Link className="for-clients-get-consult-btn">Отправить</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ForClientsConsultForm;