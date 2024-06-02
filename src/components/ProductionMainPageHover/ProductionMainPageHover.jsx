import React from "react";

const ProductionMainPageHover = (props) => {
    return (
        <React.Fragment>
            <div 
                className="production-mainpage-hover-wrap"
                style={{left: `${props.positionLeft}px`, top: `${props.positionRight / 2}px`}}
            >
                <div className="callback-request-popup-close">
                    <span 
                        className="production-close-hover-btn"
                        onClick={(e) => props.closeHandler(e, false, props.productionId)}
                    ></span>
                </div>
                <div className="production-mainpage-description">
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductionMainPageHover;