import React from "react";
import { useRef } from "react";
import TzInnerPopup from "./TzInnerPopup";
import OptionAddPopup from "./OptionAddPopup";
import { Link } from "react-router-dom";

const TzPopup = (props) => {
    const tzState = props.tzState;
    const packageTypeOptions = tzState.packageOptions.packageTypeOptions;
    const cosmeticPackageOptions = tzState.packageOptions.packageFormatOptions.cosmetic;
    const decorativePackageOptions = tzState.packageOptions.packageFormatOptions.decorative;

    const selectPackageTypeRef = useRef(null);
    const selectPackageBodyCosmeticRef = useRef(null);
    const selectPackageBodyDecorCosmeticRef = useRef(null);
    const selectPackageHeadCosmeticRef = useRef(null);
    const selectPackageHeadDecorCosmeticRef = useRef(null);
    const customPackageInputRef = useRef(null);

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
                            <h3>Дополнительные услуги:</h3>
                            <div className="sticky-sidemenu-tz-add-btn-wrap">
                                <span 
                                    className="sticky-sidemenu-tz-add-btn"
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
                            <div className="sticky-sidemenu-tz-additional-options-wrap">
                                {tzState.resultData.additionalServices.selectedServices.map((selectedServiceItem) => {
                                    return (
                                        <React.Fragment key={selectedServiceItem.id}>
                                            <div className="sticky-sidemenu-tz-additional-options-item">{selectedServiceItem.name}</div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Упаковка</h3>
                            <div className="sticky-sidemenu-package-options-wrap">
                                <select
                                    ref={selectPackageTypeRef}
                                    onChange={() => props.packageSelectHandler('packageType', selectPackageTypeRef.current.value)}
                                >
                                    {packageTypeOptions.map((optionItem) => {
                                        return (
                                            <React.Fragment key={optionItem.id}>
                                                <option>{optionItem.name}</option>
                                            </React.Fragment>
                                        )
                                    })}
                                </select>
                                {packageTypeOptions.find((packageType) => packageType.selected && packageType.type !== 'default') ? 
                                    <React.Fragment>
                                        {packageTypeOptions.find((item) => item.type === 'cosmetic' && item.selected) ? 
                                            <select
                                                ref={selectPackageBodyCosmeticRef}
                                                onChange={() => props.packageSelectHandler('cosmetic', selectPackageBodyCosmeticRef.current.value)}
                                            >
                                            {cosmeticPackageOptions.map((optionItem) => {
                                                return (
                                                    <React.Fragment key={optionItem.id}>
                                                        <option>{optionItem.name}</option>
                                                    </React.Fragment>
                                                )
                                            })}
                                            </select>
                                        : null}

                                        {packageTypeOptions.find((item) => item.type === 'decorativeCosm' && item.selected) ? 
                                            <select
                                                ref={selectPackageBodyDecorCosmeticRef}
                                                onChange={() => props.packageSelectHandler('decorative', selectPackageBodyDecorCosmeticRef.current.value)}
                                            >
                                            {decorativePackageOptions.map((optionItem) => {
                                                return (
                                                    <React.Fragment key={optionItem.id}>
                                                        <option>{optionItem.name}</option>
                                                    </React.Fragment>
                                                )
                                            })}
                                            </select>
                                        : null}
                                        {cosmeticPackageOptions.find((item) => item.selected && item.additionalOptions && item.additionalOptions.length > 0) ? 
                                            <React.Fragment>
                                                <select
                                                    ref={selectPackageHeadCosmeticRef}
                                                    onChange={() => props.packageSelectHandler('cosmeticOption', selectPackageHeadCosmeticRef.current.value)}
                                                >
                                                    {cosmeticPackageOptions.find((item) => item.selected).additionalOptions.map((optionItem) => {
                                                        return (
                                                            <React.Fragment key={optionItem.id}>
                                                                <option>{optionItem.name}</option>
                                                            </React.Fragment>
                                                    )
                                                    })}
                                                </select>

                                            </React.Fragment>
                                        : null}

                                        {decorativePackageOptions.find((item) => item.selected && item.additionalOptions && item.additionalOptions.length > 0) ? 
                                            <React.Fragment>
                                                <select
                                                    ref={selectPackageHeadDecorCosmeticRef}
                                                    onChange={() => props.packageSelectHandler('decorativeOption', selectPackageHeadDecorCosmeticRef.current.value)}
                                                >
                                                {decorativePackageOptions.find((item) => item.selected).additionalOptions.map((optionItem) => {
                                                    return (
                                                        <React.Fragment key={optionItem.id}>
                                                            <option>{optionItem.name}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                                </select>
                                            </React.Fragment>
                                        : null}
                                        {cosmeticPackageOptions.find((item) => item.selected && item.type === 'customField') ||
                                            decorativePackageOptions.find((item) => item.selected && item.type === 'customField') ? 
                                            <React.Fragment>
                                                <div className="sticky-sidemenu-package-options-custom-input-wrap">
                                                    <input
                                                        ref={customPackageInputRef}
                                                        type={tzState.packageOptions.packageCustomField.type}
                                                        placeholder={tzState.packageOptions.packageCustomField.placeholder} 
                                                        value={tzState.packageOptions.packageCustomField.value}
                                                        onChange={() => props.customPackageInputHandler(customPackageInputRef.current.value)}
                                                    />
                                                </div>
                                            </React.Fragment>
                                        : null}
                                        <div className="sticky-sidemenu-package-save-btn-wrap">
                                            <Link
                                                className={tzState.packageOptions.allFieldsValid ? 
                                                    "sticky-sidemenu-package-save-btn" : "sticky-sidemenu-package-save-btn btnDisabled"
                                                } 
                                            >Сохранить</Link>
                                        </div>
                                        
                                    </React.Fragment>
                                : null}
                            </div>
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