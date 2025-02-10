import React from "react";
import { Link } from "react-router-dom";
import optionOk from '../../img/stickyMenu/option-ok.svg'

const OptionAddPopup = (props) => {
    const popupState = props.popupState;

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-tz-options-popup-wrap">
                <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="sticky-sidemenu-tz-inner-popup-body">
                    <div className="sticky-sidemenu-tz-inner-services-wrap">
                        <h3>Добавить услугу</h3>
                        {props.services.map((serviceItem) => {
                            return (
                                <React.Fragment key={serviceItem.id}>
                                    <div 
                                        className={`sticky-sidemenu-tz-inner-services-item ${serviceItem.selected ? 'selected' : null}`}
                                        onClick={() => props.selectHandler(serviceItem.id, serviceItem.name)}
                                    >
                                    {serviceItem.name}
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="tz-inner-popup-from-controls-row">
                            <div className="tz-inner-popup-from-controls-btn-wrap">
                                <Link
                                    onClick={props.saveHandler} 
                                    className={`tz-inner-popup-from-controls-btn ${popupState.saveBtnActive ? '' : 'btnDisabled'}`}
                                >сохранить</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default OptionAddPopup;