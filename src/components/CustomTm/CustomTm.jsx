import React from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";

const CustomTm = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="custom-tms-main-column">
                            <div className="custom-tm-main-item-row">
                                <div className="custom-tm-item-content-wrap">
                                    <div className="custom-tm-item-description">
                                        description
                                    </div>
                                    <div className="custom-tm-item-gallery">
                                        gallery
                                    </div>
                                    <div className="custom-tm-item-video">
                                        video
                                    </div>
                                </div>
                                <div className="custom-tm-item-stats">
                                    <div className="custom-tm-item-logo-row">
                                        <div className="custom-tm-item-logo">logo</div>
                                        <div className="custom-tm-item-title">Title</div>
                                    </div>
                                    <div className="custom-tm-item-promo-wrap">
                                        <a>Prezentation</a>    
                                    </div>
                                    <div className="custom-tm-item-contacts-wrap">
                                        <ul>
                                            <li><a>Site</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default CustomTm;