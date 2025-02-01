import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    sidemenuActive, 
    sidemenuPopup 
} from "../../redux/slices/menuSlice";
import TzPopup from "./TzPopup";

const StickySideMenu = () => {
    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.menu.sideMenu);

    const sideMenuHandler = (menuId, status) => {
        console.log(status)
        dispatch(sidemenuActive({menuId: menuId, status: status}));
    };

    const sideMenuPopupHandler = (status, menuType) => {
        dispatch(sidemenuPopup({status: status, popupType: menuType}))
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
                /> 
            : null}
        </React.Fragment>
    )
};

export default StickySideMenu;