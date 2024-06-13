import React from "react";

const ProductionMainPageHover = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div 
                className="production-mainpage-hover-wrap"
                style={
                    {
                        left: window.screen.width < 800 ? 
                            `${props.positionLeft / 2}px` : `${props.positionLeft}px`, 
                        top: window.screen.width < 800 ? `
                            ${props.positionRight - 200}px` :  `${props.positionRight - 400}px`
                    }}
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