import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadProductFile } from "../../redux/slices/menuSlice";
import { 
    sidemenuActive, 
    sidemenuPopup,
    sidemenuTzInnerPopup,
    sidemenuPolicyCheckboxHandler,
    saveTzInnerPopup,
    tzInnerPopupCustomerInput,
    clearTzPopupInput,
    validateTzPopupCustomer,
    optionsPopupShow,
    optionSelectItemPopup,
    optionSelectSavePopup,
    validateAdditionalOptions,
    removeTzPopupInfo,
    tzInnerPopupProductInput,
    tzInnerPopupSelect,
    validateTzPopupProduct,
    packageSelect,
    customPackageInput,
    clearPackageInput,
    validateTzPackage,
    savePackageResult,
    selectTzPriceSegment,
    tzPriceSegmentDescription,
    tzDeliveryReqCheckbox,
    tzDeliveryReqInput,
    tzDeliveryReqSave,
    tzQuantityInput,
    tzQuantityClearInput,
    tzQuantityCalc,
    consultFormInput,
    tzPopupValidateResult,
    tzPopupPolicy,
    tzPopupChangeProductName,
    tzPopupClearProductName,
    consultFormClearInput,
    validateConsultForm
} from "../../redux/slices/menuSlice";
import TzPopup from "./TzPopup";
import ContactsPopup from "./ContactsPopup";

const StickySideMenu = () => {
    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.menu.sideMenu);
    const customerRefs = [
        {name: 'company', ref: useRef()},
        {name: 'city', ref: useRef()},
        {name: 'phone', ref: useRef()},
        {name: 'email', ref: useRef()}
    ];

    const productRefs = [
        {name: 'productStats', ref: useRef()},
        {name: 'productLink', ref: useRef()},
        {name: 'productSize', ref: useRef()},
        {name: 'productDoc', ref: useRef()},
        {name: 'customCosm', ref: useRef()},
        {name: 'customDecor', ref: useRef()}
    ];

    const selectProductTypesRefs = [
        {name: 'default', ref: useRef()},
        {name: 'cosmetic', ref: useRef()},
        {name: 'decorative', ref: useRef()},
    ];

    const selectPackageTypesRefs = [
        {name: 'default', ref: useRef()},
        {name: 'cosmetic', ref: useRef()},
        {name: 'decorative', ref: useRef()},
    ];

    const consultRefs = [
        {name: 'name', ref: useRef()},
        {name: 'phone', ref: useRef()},
    ];

    const tzDeliveryInputRef = useRef(null);
    const tzQuantityInputRef = useRef(null);
    const productNameInputRef = useRef(null);

    const checkTzValidIncon = (blockName) => {
        switch(blockName) {
            case 'customer':
                return menuState.tzPopup.resultData.customer.allFieldsValid ? 'valid' : null;
            case 'product':
                return menuState.tzPopup.resultData.product.allFieldsValid ? 'valid': null;
            case 'service':
                return menuState.tzPopup.resultData.additionalServices.selectedServices.length > 0 ? 'valid': null;
            case 'delivery':
                return menuState.tzPopup.resultData.delivery.allFieldsValid ? 'valid' : null;
            case 'package':
                return menuState.tzPopup.resultData.package.allFieldsValid ? 'valid' : null;
            case 'segment':
                return menuState.tzPopup.resultData.priceSegment.allFieldsValid ? 'valid' : null;
            case 'qnt':
                return menuState.tzPopup.resultData.quantity.allFieldsValid ? 'valid' : null;
            default:
                break;
        }
    };

    const findInputRef = (refArr, refName) => {
        return refArr.find((item) => item.name === refName).ref;
    }

    const sideMenuHandler = (menuId, status) => {
        dispatch(sidemenuActive({menuId: menuId, status: status}));
    };

    const sideMenuPopupHandler = (status, menuType) => {
        dispatch(sidemenuPopup({status: status, popupType: menuType}));
    };

    const tzInnerPopupHandler = (popupType, status) => {
        dispatch(sidemenuTzInnerPopup({status: status, popupType: popupType}));
    };

    const saveInnerPopupHandler = (popupType) => {
        dispatch(saveTzInnerPopup({popupType: popupType}));
    };

    const tzInnerPopupCustomerInputHandler = (inputId, inputType, inputRef) => {
        dispatch(tzInnerPopupCustomerInput({inputId: inputId, inputType: inputType, inputValue: inputRef.value}));
    };

    const tzInnerPopupClearInputHandler = (e, popupType, inputId, inputType) => {
        if (e.key === 'Backspace') {
            dispatch(clearTzPopupInput({popupType: popupType, inputId: inputId, inputType: inputType}));
            return;
        }
    };

    const tzInnerPopupProductInputHandler = (inputId, inputType, inputRef) => {
        dispatch(tzInnerPopupProductInput({inputId: inputId, inputType: inputType, inputValue: inputRef.value}));
    };

    const tzInnerPopupProductFileHandler = async (fileRef) => {
        if (fileRef && fileRef.files && fileRef.files.length > 0) {
            const file = fileRef.files[0];
            dispatch(uploadProductFile(file));
        }
       
    };

    const tzInnerPopupProductSelectHandler = (selectType, selectRef, popupType) => {
        dispatch(tzInnerPopupSelect({
            selectType: selectType, 
            selectValue: selectRef.value, 
            popupType: popupType
        }));
    };

    const removeTzInnerPopupInfo = (popupType) => {
        dispatch(removeTzPopupInfo({popupType: popupType}));
    };

    const consultInputHandler = (inputId, inputType, inputRef) => {
        dispatch(consultFormInput({inputId: inputId, inputType: inputType, inputValue: inputRef.value}));
    };

    const consultClearInputHandler = (e, inputId, inputType) => {
        if (e.key === 'Backspace') {
            dispatch(consultFormClearInput({inputId: inputId, inputType: inputType}));
            return;
        }
    };

    const consultCheckboxHandler = () => {
        dispatch(sidemenuPolicyCheckboxHandler({formName: 'consult'}))
    };

    const sendConsultFormHandler = () => {
        const sendData = {
            name: menuState.contactsPopup.fields.find((item) => item.name === 'name' && item.valid).value,
            phone: menuState.contactsPopup.fields.find((item) => item.name === 'phone' && item.valid).value
        };
        console.log(sendData);
    };

    const additionalOptionsPopupHandler = () => {
        dispatch(optionsPopupShow());
    };

    const selectOptionPopupHandler = (optionId, optionName) => {
        dispatch(optionSelectItemPopup({optionId: optionId, optionName: optionName}))
    };

    const saveSelectOptionPopupHandler = () => {
        dispatch(optionSelectSavePopup());
    };

    const chanagePackageHandler = (optionType, optionValue) => {
        dispatch(packageSelect({selectType: optionType, selectValue: optionValue}));
    };

    const customPackageInputHandler = (inputValue) => {
        dispatch(customPackageInput({inputValue: inputValue}));
    };

    const customPackageClearInput = (e) => {
        if (e.key === 'Backspace') {
            dispatch(clearPackageInput());
            return;
        }
    };

    const savePackageResultHandler = () => {
        dispatch(savePackageResult());
    };

    const selectPriceSegmentHandler = (segmentId, segmentName) => {
        dispatch(selectTzPriceSegment({segmentId: segmentId, segmentName: segmentName}));
    };

    const segmentDescriptionHandler = (segmentId, segmentName, status) => {
        dispatch(tzPriceSegmentDescription({segmentId: segmentId, segmentName: segmentName, status: status}));
    };

    const deliveryCheboxHandler = (deliveryType) => {
        dispatch(tzDeliveryReqCheckbox({deliveryType: deliveryType}));
    };

    const deliveryCityInputHandler = (inputRef) => {
        dispatch(tzDeliveryReqInput({inputValue: inputRef.value}));
    };

    const deliveryCitySaveHandler = () => {
        dispatch(tzDeliveryReqSave());
    };
    
    const deliveryCityClearInput = (e) => {
        if (e.key === 'Backspace') {
            dispatch(tzDeliveryReqInput({inputValue: ''}));
            return;
        }
    };

    const tzProductQuantityHandler = (quantityRef) => {
        dispatch(tzQuantityInput({inputValue: quantityRef.value}));
    };

    const tzProductQuantityClearInput = (e) => {
        if (e.key === 'Backspace') {
            dispatch(tzQuantityClearInput());
            return;
        }
    };

    const tzPolicyHandler = () => {
        dispatch(tzPopupPolicy());
    };

    const sendTzHandler = () => {
        const sendData = menuState.tzPopup.resultData;
        console.log(sendData);
    };

    const changeProductNameHandler = (inputRef) => {
        console.log(inputRef.value)
        dispatch(tzPopupChangeProductName({inputValue: inputRef.value}))
    };
    
    const clearProductNameHandler = (e) => {
        if (e.key === 'Backspace') {
            dispatch(tzPopupClearProductName());
            return;
        }
    };

    useEffect(() => {
        dispatch(validateTzPopupCustomer());
    }, [menuState.tzPopup.customerPopup]);

    useEffect(() => {
        dispatch(validateTzPopupProduct());
    }, [menuState.tzPopup.productPopup]);

    useEffect(() => {
        dispatch(validateAdditionalOptions());
    }, [menuState.tzPopup.additionalOptionsPopup]);

    useEffect(() => {
        dispatch(validateTzPackage());
    }, [menuState.tzPopup.packageOptions, menuState.tzPopup.resultData.package]);

    useEffect(() => {
        dispatch(tzQuantityCalc());
    }, [menuState.tzPopup.resultData.product.cosmeticSize, menuState.tzPopup.quantity.quantityInput]);

    useEffect(() => {
        dispatch(tzPopupValidateResult());
        console.log(menuState.tzPopup.resultData)
    }, [menuState.tzPopup.resultData, menuState.tzPopup.policyActive])
    
    useEffect(() => {
        dispatch(validateConsultForm());
    }, [menuState.contactsPopup]);

    return (
        <React.Fragment>
            {menuState.menuItems.map((menuItem) => {
                return (
                    <React.Fragment key={menuItem.id}>
                        <div className={`sticky-sidemenu-item-${menuItem.id}`}>
                            <div 
                                className={menuItem.active ? "sticky-sidemenu-item-row active" : "sticky-sidemenu-item-row"}
                                onMouseEnter={() => sideMenuHandler(menuItem.id, true)}
                                onMouseLeave={() => sideMenuHandler(menuItem.id, false)}
                                onClick={() => sideMenuPopupHandler(true, menuItem.type)}
                            >
                                <div className="sticky-sidemenu-item-img">
                                    <img className="sticky-sidemenu-image" src={menuItem.img} alt={menuItem.imgAlt} />
                                </div>
                                <div className="sticky-sidemenu-item-description">
                                    {menuItem.name}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            {menuState.tzPopup.active ? 
                <TzPopup 
                    closeHandler={sideMenuPopupHandler}
                    tzState={menuState.tzPopup}
                    innerPopupHandler={tzInnerPopupHandler}
                    innerPopupCustomerInputHandler={tzInnerPopupCustomerInputHandler}
                    clearInputHandler={tzInnerPopupClearInputHandler}
                    innerSavePopupHandler={saveInnerPopupHandler}
                    customerRefs={customerRefs}
                    productRefs={productRefs}
                    selectProductTypesRefs={selectProductTypesRefs}
                    selectPackageTypesRefs={selectPackageTypesRefs}
                    customPackageInputHandler={customPackageInputHandler}
                    customPackageClearInputHandler={customPackageClearInput}
                    innerPopupProductInputHandler={tzInnerPopupProductInputHandler}
                    innerPopupProductSelectHandler={tzInnerPopupProductSelectHandler}
                    innerPopupProductFileHandler={tzInnerPopupProductFileHandler}
                    packageSelectHandler={chanagePackageHandler}
                    savePackageHandler={savePackageResultHandler}
                    selectSegmentHandler={selectPriceSegmentHandler}
                    segmentDescriptionHandler={segmentDescriptionHandler}
                    deliveryCheckbox={deliveryCheboxHandler}
                    deliveryInputHandler={deliveryCityInputHandler}
                    deliveryClearInputHandler={deliveryCityClearInput}
                    deliverySaveHandler={deliveryCitySaveHandler}
                    deliveryInputRef={tzDeliveryInputRef}
                    quantityInputRef={tzQuantityInputRef}
                    productNameRef={productNameInputRef}
                    quantityHandler={tzProductQuantityHandler}
                    quantityClearHandler={tzProductQuantityClearInput}
                    policyHandler={tzPolicyHandler}
                    additionalOptionsHandler={additionalOptionsPopupHandler}
                    additionalOptionSelectHandler={selectOptionPopupHandler}
                    additionalOptionSaveHandler={saveSelectOptionPopupHandler}
                    findInputRef={findInputRef}
                    removeTzInnerPopupInfoHandler={removeTzInnerPopupInfo}
                    changeProductNameHandler={changeProductNameHandler}
                    clearProductNameHandler={clearProductNameHandler}
                    sendTzHandler={sendTzHandler}
                    validateBlockIcon={checkTzValidIncon}
                /> 
            : null}
            {menuState.contactsPopup.active ? 
                <ContactsPopup 
                    closeHandler={sideMenuPopupHandler}
                    consultState={menuState.contactsPopup}
                    consultRefs={consultRefs}
                    findInputRef={findInputRef}
                    inputHandler={consultInputHandler}
                    clearInputHandler={consultClearInputHandler}
                    policyCheckboxHandler={consultCheckboxHandler}
                    sendFormHandler={sendConsultFormHandler}
                /> 
            : null}
        </React.Fragment>
    )
};

export default StickySideMenu;