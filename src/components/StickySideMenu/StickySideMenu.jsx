import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidemenuActive } from "../../redux/slices/menuSlice";
import demo from '../../img/decoraticeCosmeticsImages/demo.png';

const StickySideMenu = () => {
    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.menu.sideMenu);

    const sideMenuHandler = (menuId, status) => {
        console.log(status)
        dispatch(sidemenuActive({menuId: menuId, status: status}));
    };

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-wrap">
                {menuState.menuItems.map((menuItem) => {
                    return (
                        <React.Fragment key={menuItem.id}>
                            <div className="sticky-sidemenu-item">
                                <div 
                                    className={menuItem.active ? "sticky-sidemenu-item-row active" : "sticky-sidemenu-item-row"}
                                    onMouseEnter={() => sideMenuHandler(menuItem.id, true)}
                                    onMouseLeave={() => sideMenuHandler(menuItem.id, false)}
                                >
                                    <div className="sticky-sidemenu-item-img">
                                        <img src={demo} alt="#" />
                                    </div>
                                    <div className="sticky-sidemenu-item-description">
                                        {menuItem.name}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
};

export default StickySideMenu;