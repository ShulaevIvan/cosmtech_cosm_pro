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
                        <h2>Заполнить техзадание на производство</h2>
                    </div>
                    <div className="sticky-sidemenu-tz-form-wrap">
                    <div className="sticky-sidemenu-tz-form-row">
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Сведения о заказчике:</h3>
                            {tzState.customerPopup.active ? 
                                <TzInnerPopup
                                    popupType={'customer'} 
                                    closeHandler={props.innerPopupHandler}
                                    saveHandler={props.innerSavePopupHandler}
                                    form={tzState.customerPopup.fields}
                                    innerPopupState={tzState.customerPopup}
                                    inputHandler={props.innerPopupCustomerInputHandler}
                                    clearInputHandler={props.clearInputHandler}
                                    refs={props.customerRefs}
                                    findInputRef={props.findInputRef}
                                    title={'Сведения о заказчике'}
                                />
                            : null}
                            {!tzState.resultData.customer.allFieldsValid ? 
                                <div className="sticky-sidemenu-tz-add-btn-wrap">
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
                                                onClick={() => props.removeTzInnerPopupInfoHandler('customer')}
                                            ></span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            : null}
                        </div>
                        <div className="sticky-sidemenu-tz-form-product-type-wrap">
                            <h3>Производимый продукт</h3>
                            <div className="sticky-sidemenu-tz-form">
                                {!tzState.resultData.product.allFieldsValid ? 
                                    <div className="sticky-sidemenu-tz-add-btn-wrap">
                                        <span 
                                            className="sticky-sidemenu-tz-add-btn"
                                            onClick={() => props.innerPopupHandler('product', true)}
                                        ></span>
                                    </div>
                                : null}
                                {tzState.resultData.product.allFieldsValid && tzState.resultData.product && tzState.resultData.product.cosmeticName ? 
                                    <React.Fragment>
                                        <div className="sticky-sidemenu-tz-form-customer-info-item">
                                            <div className="sticky-sidemenu-tz-form-customer-info-item-value">{tzState.resultData.product.cosmeticName}</div>
                                            <div className="sticky-sidemenu-tz-form-customer-info-item-control">
                                                <span className="sticky-sidemenu-tz-edit-btn"></span>
                                                <span 
                                                    className="sticky-sidemenu-tz-remove-btn"
                                                    onClick={() => props.removeTzInnerPopupInfoHandler('product')}
                                                ></span>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                : null}
                                {tzState.productPopup.active ? 
                                    <TzInnerPopup
                                        popupType={'product'}  
                                        closeHandler={props.innerPopupHandler}
                                        form={tzState.productPopup.fields}
                                        innerPopupState={tzState.productPopup}
                                        inputHandler={props.innerPopupProductInputHandler}
                                        clearInputHandler={props.clearInputHandler}
                                        inputFileHandler={props.innerPopupProductFileHandler}
                                        saveHandler={props.innerSavePopupHandler}
                                        selectHandler={props.innerPopupProductSelectHandler}
                                        refs={props.productRefs}
                                        productTypesRefs={props.selectProductTypesRefs}
                                        findInputRef={props.findInputRef}
                                        title={'Сведения о продукте'}
                                    />
                                : null}
                            </div>
                        </div>
                    </div>
                    <div className="sticky-sidemenu-tz-form-row">
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Дополнительные условия:</h3>
                        </div>
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Упаковка:</h3>
                        </div>
                    </div>
                    <div className="sticky-sidemenu-tz-form-row">
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Отгрузка/Доставка:</h3>
                        </div>
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Ценовой сегмент:</h3>
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