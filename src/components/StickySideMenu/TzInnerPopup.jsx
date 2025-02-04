import React from "react";
import { Link } from "react-router-dom";

const TzInnerPopup = (props) => {
    return (
        <React.Fragment>
            <div className="sticky-sidemenu-tz-inner-popup">
                <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={() => props.closeHandler(false, 'customer')}
                    ></span>
                </div>
                <div className="sticky-sidemenu-tz-inner-popup-body">
                    <h3>{props.title}</h3>
                    <div className="tz-inner-popup-from-wrap">
                        {props.form.map((formItem) => {
                            return (
                                <React.Fragment key={formItem.id}>
                                    <div className="tz-inner-popup-input-wrap">
                                        <div className="tz-inner-popup-input-title">
                                            <label htmlFor={`tz-inner-popup-input-${formItem.id}`}>{formItem.title}</label>
                                        </div>
                                        <input
                                            ref={props.findInputRef(props.customerRefs, formItem.name)}
                                            id={`tz-inner-popup-input-${formItem.id}`} 
                                            type="text" 
                                            placeholder={formItem.placeholder}
                                            value={formItem.value}
                                            onChange={() => props.inputHandler(
                                                formItem.id, 
                                                formItem.name, 
                                                props.findInputRef(props.customerRefs, formItem.name).current)
                                            }
                                        />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="tz-inner-popup-from-controls-row">
                            <div className="tz-inner-popup-from-controls-btn-wrap">
                                <Link 
                                    className="tz-inner-popup-from-controls-btn"
                                    onClick={() => props.saveHandler('customer')}
                                >сохранить</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default TzInnerPopup;