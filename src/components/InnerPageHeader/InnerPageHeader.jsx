import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { changeHeaderBackground } from "../../redux/slices/innerPageSlice";
import InnerPageBreadcrumbs from "../InnerPageBreadcrumbs/InnerPageBreadcrubs";


const InnerPageHeader = () => {
    const location = useLocation(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeBackground = useSelector((state) => state.innerPage.activeBackground);
    const headerContent = useSelector((state) => state.innerPage.headerBackgrounds);
    const pageTitle = headerContent.find((header) => header.page === location.pathname.replace(/\/$/, '')).title;
    const pageDescription = headerContent.find((header) => header.page === location.pathname.replace(/\/$/, '')).description;
    const breadcrumbs = headerContent.find((item) => item.page === location.pathname.replace(/\/$/, '') && location.pathname !== '/').breadcrumbs;

    useEffect(() => {
        if (/\/$/.test(location.pathname)) {
            navigate(location.pathname.replace(/\/$/, ''),  { replace: true })
        }
        dispatch(changeHeaderBackground({currentPage: location.pathname.replace(/\/$/, '')}));
    }, [location.pathname]);

    return (
        <React.Fragment>
            <div className="inner-page-header-title-wrap">
                <InnerPageBreadcrumbs breadcrumbs={breadcrumbs} />
                <div className="inner-page-main-title-wrap">
                
                    <h1>{pageTitle}</h1>
                    <div className="inner-page-main-title-description">
                        <p>{pageDescription}</p>
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