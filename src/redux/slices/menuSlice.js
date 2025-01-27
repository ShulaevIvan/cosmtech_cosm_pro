import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = { 
    mobileMenuActive: false,
    mainMenu: {
        menuItems: [
            {
                id: 1,
                name: 'Контрактное производство',
                url: '/',
                submenu: {
                    active: false,
                    menuItems: [
                        {
                            id: 1,
                            name: 'Декоративная косметика',
                            url: '/decorative-cosmetics'
                        },
                        {
                            id: 2,
                            name: 'Декоративная косметика',
                            url: '/decorative-cosmetics'
                        }
                    ]
                }
            },
            {
                id: 2,
                name: 'Услуги',
                url: '/services',
                submenu: false
            },
            {
                id: 3,
                name: 'О Нас',
                url: '/about',
                submenu: false
            },
            {
                id: 4,
                name: 'Контакты',
                url: '/contacts',
                submenu: false
            }
        ]
    }
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        mobileMenuActive(state, action) {
            const { status } = action.payload;
            state.mobileMenuActive = status;
        },
        submenuActive(state, action) {
            const { menuId, menuName} = action.payload;
            const findActiveMenu = state.mainMenu.menuItems.find((item) => item.id === menuId && item.name === menuName && item.submenu);
            if (findActiveMenu && findActiveMenu.id === menuId && findActiveMenu.name === menuName) {
                state.mainMenu.menuItems = state.mainMenu.menuItems.map((menuItem) => {
                    if (menuItem.id === menuId && menuItem.name === menuName && menuItem.submenu) {
                        return {
                            ...menuItem,
                            submenu: {
                                ...menuItem.submenu,
                                active: true
                            }
                        }
                    }
                    return menuItem;
                });
                return
            }
            state.mainMenu.menuItems = initialState.mainMenu.menuItems;
        },
        resetMenu(state) {
            state.mainMenu.menuItems = initialState.mainMenu.menuItems;
        }
    }
});


export const {
    mobileMenuActive,
    submenuActive,
    resetMenu
} = menuSlice.actions;
export default menuSlice.reducer;