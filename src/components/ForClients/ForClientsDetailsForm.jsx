import React from "react";
import { Link } from "react-router-dom";

const ForClientsDetailsForm = (props) => {
    return (
        <React.Fragment>
            <div className="for-clients-detail-form-background">
                <div className="for-clients-detail-from-row">
                    <span 
                        className="for-clients-detail-popup-close-btn"
                        onClick={() => props.popupHandler(false)}
                    ></span>
                    <div className="for-clients-detail-main-title-form">
                        <h3>Задать вопрос</h3>
                    </div>
                    <div className="for-clients-detail-inputs-wrap">
                        <div className="for-clients-detail-input-wrap">
                            <div className="for-detail-detail-title-wrap">
                                <label>title</label>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="for-clients-detail-input-wrap">
                            <div className="for-detail-detail-title-wrap">
                                <label>title</label>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="for-clients-detail-input-wrap">
                            <div className="for-detail-detail-title-wrap">
                                <label>title</label>
                            </div>
                            <textarea></textarea>
                        </div>
                        <div className="form-mode-for-clients-get-detail-checkbox">
                            <input
                                onClick={props.policyHandler}
                                type="checkbox" 
                                id="for-clients-get-detail-checkbox" className="for-clients-get-detail-checkbox"
                            />
                            <label
                                htmlFor="for-clients-get-detail-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                    </div>
                    <div className="for-clients-detail-btn-wrap ">
                        <Link 
                            className={"for-clients-get-detail-btn"}
                        >Отправить</Link>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
};

export default ForClientsDetailsForm;