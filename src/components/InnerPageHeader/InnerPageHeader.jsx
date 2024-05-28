import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import { changeHeaderBackground } from "../../redux/slices/innerPageSlice";
import InnerPageBreadcrumbs from "../InnerPageBreadcrumbs/InnerPageBreadcrubs";


const InnerPageHeader = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const activeBackground = useSelector((state) => state.innerPage.activeBackground);

    useEffect(() => {
        dispatch(changeHeaderBackground({currentPage: location.pathname}));
        console.log(activeBackground)
    }, [location.pathname]);


    return (
        <React.Fragment>
            <div class="inner-page-header-title-wrap">
                <InnerPageBreadcrumbs />
                <div class="inner-page-main-title-wrap">
                
                    <h1>О Компании</h1>
                    <div class="inner-page-main-title-description">
                        <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                    </div>
                </div>
                <div class="inner-page-background-wrap">
                    <img src={activeBackground} alt="background" />
                </div>
            </div>
        </React.Fragment>
    )
};

export default InnerPageHeader;