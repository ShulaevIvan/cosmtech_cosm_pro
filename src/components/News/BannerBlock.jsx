import React from "react";

const BannerBlock = (props) => {
    return (
        <React.Fragment>
            <div className="news-article-banner-wrap">
                <img src={props.banner} alt={props.alttext} />
            </div>
        </React.Fragment>
    )
};

export default BannerBlock;