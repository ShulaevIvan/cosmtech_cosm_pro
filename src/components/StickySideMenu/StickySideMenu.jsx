import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    sidemenuActive, 
    sidemenuPopup,
    sidemenuTzInnerPopup,
    saveTzInnerPopup,
    tzInnerPopupCustomerInput,
    removeTzCustomerInfo
} from "../../redux/slices/menuSlice";
import TzPopup from "./TzPopup";

const StickySideMenu = () => {
    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.menu.sideMenu);
    const customerRefs = [
        {name: 'company', ref: useRef()},
        {name: 'city', ref: useRef()},
        {name: 'phone', ref: useRef()},
        {name: 'email', ref: useRef()}
    ];

    const findInputRef = (refArr, refName) => {
        return refArr.find((item) => item.name === refName).ref;
    }

    const sideMenuHandler = (menuId, status) => {
        console.log(status)
        dispatch(sidemenuActive({menuId: menuId, status: status}));
    };

    const sideMenuPopupHandler = (status, menuType) => {
        dispatch(sidemenuPopup({status: status, popupType: menuType}))
    };

    const tzInnerPopupHandler = (popupType, status) => {
        dispatch(sidemenuTzInnerPopup({status: status, popupType: popupType}));
    };

    const saveInnerPopupHandler = (popupType) => {
        dispatch(saveTzInnerPopup({popupType: popupType}))
    };

    const tzInnerPopupCustomerInputHandler = (inputId, inputType, inputRef) => {
        console.log(inputRef)
        dispatch(tzInnerPopupCustomerInput({inputId: inputId, inputType: inputType, inputValue: inputRef.value}))
    };

    const removeCustomerInfoHandler = () => {
        dispatch(removeTzCustomerInfo());
    };

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
                    findInputRef={findInputRef}
                    removeCustomerInfoHandler={removeCustomerInfoHandler}
                /> 
            : null}
        </React.Fragment>
    )
};

export default StickySideMenu;