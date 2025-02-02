import React from "react";
import TzInnerPopup from "./TzInnerPopup";

const TzPopup = (props) => {
    const tzState = props.tzState;
    return (
        <React.Fragment>
            <div className="sticky-sidemenu-tz-background">
            <div className="sticky-sidemenu-tz-popup-wrap">
                <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={() => props.closeHandler(false, 'tz')}
                    ></span>
                </div>
                <div className="sticky-sidemenu-tz-popup-body">
                    <div className="sticky-sidemenu-tz-title-wrap">
                        <h2>Заполнить тз онлайн</h2>
                    </div>
                    <div className="sticky-sidemenu-tz-form-customer-row">
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Сведения о заказчике:</h3>
                            {tzState.customerPopup.active ? 
                                <TzInnerPopup 
                                    closeHandler={props.innerPopupHandler}
                                    saveHandler={props.innerSavePopupHandler}
                                    form={tzState.customerPopup.fields}
                                    inputHandler={props.innerPopupCustomerInputHandler}
                                    customerRefs={props.customerRefs}
                                    findInputRef={props.findInputRef}
                                    title={'Сведения о заказчике'}
                                />
                            : null}
                            {tzState.customerPopup.showAddBtn ? 
                                <div className="sticky-sidemenu-tz-form-customer-add-btn-wrap">
                                    <span 
                                        className="sticky-sidemenu-tz-add-btn"
                                        onClick={() => props.innerPopupHandler('customer', true)}
                                    ></span>
                                </div>
                            : null}
                            {tzState.customerPopup.allFieldsValid && tzState.resultData.customer && tzState.resultData.customer.companyName ? 
                                <React.Fragment>
                                    <div className="sticky-sidemenu-tz-form-customer-info-item">
                                        <div className="sticky-sidemenu-tz-form-customer-info-item-value">{tzState.resultData.customer.companyName}</div>
                                        <div className="sticky-sidemenu-tz-form-customer-info-item-control">
                                            <span className="sticky-sidemenu-tz-edit-btn"></span>
                                            <span 
                                                className="sticky-sidemenu-tz-remove-btn"
                                                onClick={props.removeCustomerInfoHandler}
                                            ></span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            : null}
                        </div>
                        <div className="sticky-sidemenu-tz-form-product-type-wrap">
                            <h3>Тип продукта</h3>
                            <div className="sticky-sidemenu-tz-form">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default TzPopup;