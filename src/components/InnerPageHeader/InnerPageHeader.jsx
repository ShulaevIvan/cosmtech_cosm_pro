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
    const headerContent = useSelector((state) => state.innerPage.headerBackgrounds);

    useEffect(() => {
        dispatch(changeHeaderBackground({currentPage: location.pathname}));
    }, [location.pathname]);


    return (
        <React.Fragment>
            <div className="inner-page-header-title-wrap">
                <InnerPageBreadcrumbs />
                <div className="inner-page-main-title-wrap">
                
                    <h1>{headerContent.find((header) => header.page === location.pathname).title}</h1>
                    <div className="inner-page-main-title-description">
                        <p>{headerContent.find((header) => header.page === location.pathname).description}</p>
                    </div>
                </div>
                <div className="inner-page-background-wrap">
                    <img src={activeBackground} alt="background" />
                </div>
            </div>
        </React.Fragment>
    )
};

export default InnerPageHeader;