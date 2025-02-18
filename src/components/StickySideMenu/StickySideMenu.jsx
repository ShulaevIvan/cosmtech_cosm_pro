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
    consultFormInput,
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
                    additionalOptionsHandler={additionalOptionsPopupHandler}
                    additionalOptionSelectHandler={selectOptionPopupHandler}
                    additionalOptionSaveHandler={saveSelectOptionPopupHandler}
                    findInputRef={findInputRef}
                    removeTzInnerPopupInfoHandler={removeTzInnerPopupInfo}
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