import React from "react";
import { useEffect, useRef } from "react";

const ProductionMainPageHover = (props) => {
    const closePopupBtnRef = useRef(null);
    const hoverWrapRef = useRef(null);

    const clickOutsideHandler = (e) => {
        if (hoverWrapRef.current && !hoverWrapRef.current.contains(e.target)) {
            closePopupBtnRef.current.click();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', clickOutsideHandler);
        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler);
        };
    }, [hoverWrapRef]);

    return (
        <React.Fragment>
            <div
                ref={hoverWrapRef}
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
                        ref={closePopupBtnRef}
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