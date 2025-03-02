import React from "react";
import TzInnerPopup from "./TzInnerPopup";
import TzPackage from "./TzPackage";
import TzPriceSegment from "./TzPriceSegment";
import OptionAddPopup from "./OptionAddPopup";
import { Link } from "react-router-dom";

import StickySideMenuHappyState from "./StickySideMenuHappyStatePopup";

const TzPopup = (props) => {
    const tzState = props.tzState;
    const checkCityInput = tzState.delivery.deliveryCityInput.valid && tzState.delivery.deliveryCityInput.value !== '';
    const checkCitySaved = tzState.resultData.delivery.saved;

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
                        <div className={`sticky-sidemenu-tz-form-customer-wrap ${props.validateBlockIcon('customer')}`}>
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
                                        <div className="sticky-sidemenu-tz-form-customer-info-item-value">
                                            {tzState.resultData.customer.companyName}
                                        </div>
                                        <div className="sticky-sidemenu-tz-form-customer-info-item-control">
                                            <span 
                                                className="sticky-sidemenu-tz-remove-btn"
                                                onClick={() => props.removeTzInnerPopupInfoHandler('customer')}
                                            ></span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            : null}
                        </div>
                        <div className={`sticky-sidemenu-tz-form-customer-wrap ${props.validateBlockIcon('product')}`}>
                            <h3>Производимый продукт:</h3>
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
                                            <div className="sticky-sidemenu-tz-form-customer-info-item-value">
                                                {tzState.resultData.product.cosmeticName}
                                            </div>
                                            <div className="sticky-sidemenu-tz-form-customer-info-item-control">
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
                                        title={'Сведения о продукте'}
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
                                        changeProductNameHandler={props.changeProductNameHandler}
                                        clearProductNameHandler={props.clearProductNameHandler}
                                        productNameRef={props.productNameRef}
                                    />
                                : null}
                            </div>
                        </div>
                    </div>
                    <div className="sticky-sidemenu-tz-form-row">
                        <div className={`sticky-sidemenu-tz-form-customer-wrap ${props.validateBlockIcon('service')}`}>
                            <h3>Дополнительные услуги:</h3>
                            <div className="sticky-sidemenu-tz-add-btn-wrap">
                                <span 
                                    className={
                                        tzState.resultData.additionalServices.selectedServices.length > 0 ? 
                                            'sticky-sidemenu-tz-edit-btn': 'sticky-sidemenu-tz-add-btn'
                                    }
                                    onClick={props.additionalOptionsHandler}
                                ></span>
                            </div>
                            
                        
                            {tzState.additionalOptionsPopup.active ? 
                                <OptionAddPopup
                                    popupState={tzState.additionalOptionsPopup}
                                    closeHandler={props.additionalOptionsHandler}
                                    services={tzState.additionalOptionsPopup.services}
                                    selectHandler={props.additionalOptionSelectHandler}
                                    saveHandler={props.additionalOptionSaveHandler}
                                />
                            : null}
                        </div>
                        <div className={`sticky-sidemenu-tz-form-customer-wrap ${props.validateBlockIcon('package')}`}>
                            <h3>Упаковка:</h3>
                            <TzPackage
                                tzState={tzState} 
                                packageSelectHandler={props.packageSelectHandler}
                                customPackageInputHandler={props.customPackageInputHandler}
                                customPackageClearInputHandler={props.customPackageClearInputHandler}
                                savePackageHandler={props.savePackageHandler}
                            />
                        </div>
                    </div>
                    <div className="sticky-sidemenu-tz-form-row">
                        <div className={`sticky-sidemenu-tz-form-customer-wrap ${props.validateBlockIcon('delivery')}`}>
                            <h3>Отгрузка / Доставка:</h3>
                            <div className="sticky-sidemenu-consult-checkbox-wrap">
                                <div className="sticky-sidemenu-self-delivery-checkbox-wrap">
                                    <input
                                        id="sticky-sidemenu-self-delivery-checkbox" 
                                        onClick={() => props.deliveryCheckbox('selfDelivery')}
                                        type="checkbox" 
                                        className="sticky-sidemenu-self-delivery-checkbox"
                                    />
                                    <label
                                        htmlFor="sticky-sidemenu-self-delivery-checkbox"
                                    ></label>
                                    <span>Самовывоз с производства</span>
                                </div>
                            </div>
                            <div className="sticky-sidemenu-consult-checkbox-wrap">
                                <div className="sticky-sidemenu-delivery-checkbox-wrap">
                                    <input
                                        id="sticky-sidemenu-delivery-checkbox" 
                                        onClick={() => props.deliveryCheckbox('delivery')}
                                        type="checkbox" 
                                        className="sticky-sidemenu-delivery-checkbox"
                                    />
                                    <label
                                        htmlFor="sticky-sidemenu-delivery-checkbox"
                                    ></label>
                                    <span>Требуется доставка</span>
                                </div>
                            </div>
                            {tzState.delivery.deliveryReq ?
                                <React.Fragment>
                                    <div className="sticky-sidemenu-tz-delivery-form-wrap">
                                        <label htmlFor={`${tzState.delivery.deliveryCityInput.name}-${tzState.delivery.deliveryCityInput.id}`}>
                                            Город доставки
                                        </label>
                                        <div className="sticky-sidemenu-tz-delivery-form-input-wrap">
                                            <input
                                                className={tzState.delivery.deliveryCityInput.valid ? null : 'input-err'}
                                                ref={props.deliveryInputRef}
                                                onKeyDown={(e) => props.deliveryClearInputHandler(e)}
                                                onChange={() => props.deliveryInputHandler(props.deliveryInputRef.current)}
                                                id={`${tzState.delivery.deliveryCityInput.name}-${tzState.delivery.deliveryCityInput.id}`} 
                                                type={tzState.delivery.deliveryCityInput.type}
                                                value={tzState.delivery.deliveryCityInput.value}
                                                placeholder={tzState.delivery.deliveryCityInput.placeholder}
                                                disabled={tzState.resultData.delivery.saved ? true : null}
                                            />
                                            {!checkCitySaved ? 
                                                <Link
                                                    onClick={props.deliverySaveHandler} 
                                                    className={
                                                        `sticky-sidemenu-tz-delivery-save-btn ${!checkCityInput || checkCitySaved ? 'btnDisabled' : null }`
                                                    }
                                                >{checkCitySaved ? 'Сохранено': 'Сохранить'}</Link>
                                            : null}
                                            
                                        </div>
                                    </div>
                                </React.Fragment>
                            : null}
                            
                        </div>
                        <div className={`sticky-sidemenu-tz-form-customer-wrap ${props.validateBlockIcon('segment')}`}>
                            <h3>Ценовой сегмент:</h3>
                            <TzPriceSegment 
                                tzState={tzState}
                                selectSegmentHandler={props.selectSegmentHandler}
                                descriptionHandler={props.segmentDescriptionHandler}
                            />
                        </div>
                    </div>
                    <div className={`sticky-sidemenu-tz-product-quantity-wrap ${props.validateBlockIcon('qnt')}`}>
                        <div className="sticky-sidemenu-tz-quantity-title-wrap">
                            <h3>Количество единиц:</h3>
                        </div>
                        <div className="sticky-sidemenu-tz-final-row">
                            <div className="sticky-sidemenu-tz-quantity-wrap">
                                <div className="sticky-sidemenu-tz-quantity-input-row">
                                    <div className="sticky-sidemenu-tz-quantity-input-description">Итого:</div>
                                    {tzState.productPopup.fields.find((item) => item.name === 'productSize' && item.value) ? 
                                        <React.Fragment>
                                            <div className="sticky-sidemenu-tz-quantity-input-wrap">
                                                <input
                                                    className={tzState.quantity.quantityInput.valid ? null : 'input-err'}
                                                    ref={props.quantityInputRef}
                                                    onChange={() => props.quantityHandler(props.quantityInputRef.current)}
                                                    onKeyDown={(e) => props.quantityClearHandler(e)}
                                                    type={tzState.quantity.quantityInput.type}
                                                    value={tzState.quantity.quantityInput.value}
                                                    placeholder={tzState.quantity.quantityInput.placeholder}
                                                />
                                            </div>
                                            <div className="sticky-sidemenu-tz-quantity-input-unit">шт</div>
                                        </React.Fragment>
                                    : null}
                                </div>
                            </div>
                            <div className="sticky-sidemenu-tz-quantity-description">
                                <p>
                                    Минимальная партия производства 50 кг. Мин. кол-во в заказе  
                                    <span className="sticky-sidemenu-tz-quantity-min-value"> 
                                        {tzState.quantity.minOrderProductQnt && tzState.quantity.minOrderProductQnt > 0 ? 
                                            ` от ${tzState.quantity.minOrderProductQnt} шт` : ' не определено'}
                                    </span> 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-sidemenu-tz-send-form-wrap">
                        <div className="sticky-sidemenu-tz-send-btn-wrap">
                            <div className="sticky-sidemenu-tz-policy-checkbox-wrap">
                                <input
                                    onChange={props.policyHandler}
                                    id="sticky-sidemenu-tz-policy-checkbox" 
                                    type="checkbox" 
                                    className="sticky-sidemenu-tz-policy-checkbox"
                                />
                                <label
                                    htmlFor="sticky-sidemenu-tz-policy-checkbox"
                                ></label>
                                <span>
                                    согласен с <Link to={"/policy"} target={"_blank"}>политикой конфидициальности</Link>
                                </span>
                            </div>
                            <Link
                                onClick={props.sendTzHandler} 
                                className={`sticky-sidemenu-tz-send-btn ${tzState.allFieldsValid ? null : 'btnDisabled'}`}
                            >Отправить</Link>
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