import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    sidemenuActive, 
    sidemenuPopup,
    sidemenuTzInnerPopup,
    sidemenuPolicyCheckboxHandler,
    saveTzInnerPopup,
    tzInnerPopupCustomerInput,
    removeTzCustomerInfo,
    tzInnerPopupProductInput,
    tzInnerPopupSelect,
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
        {name: 'productDoc', ref: useRef()}
    ];
    const selectProductTypesRefs = [
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

    const tzInnerPopupProductInputHandler = (inputId, inputType, inputRef) => {
        dispatch(tzInnerPopupProductInput({inputId: inputId, inputType: inputType, inputValue: inputRef.value}));
    };

    const tzInnerPopupProductSelectHandler = (selectType, selectRef, popupType) => {
        dispatch(tzInnerPopupSelect({
            selectType: selectType, 
            selectValue: selectRef.value, 
            popupType: popupType
        }));
    };

    const removeCustomerInfoHandler = () => {
        dispatch(removeTzCustomerInfo());
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
                    innerSavePopupHandler={saveInnerPopupHandler}
                    customerRefs={customerRefs}
                    productRefs={productRefs}
                    selectProductTypesRefs={selectProductTypesRefs}
                    innerPopupProductInputHandler={tzInnerPopupProductInputHandler}
                    innerPopupProductSelectHandler={tzInnerPopupProductSelectHandler}
                    findInputRef={findInputRef}
                    removeCustomerInfoHandler={removeCustomerInfoHandler}
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