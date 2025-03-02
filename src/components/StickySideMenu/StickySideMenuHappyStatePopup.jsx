import React from "react";

const StickySideMenuHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="sticky-sidemenu-happy-state-wrap">
                <div className="sticky-sidemenu-happy-state-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={() => props.closeHandler(props.popupType)}
                    ></span>
                </div>
                <div className="sticky-sidemenu-happy-state-title-wrap">
                    <h3>{props.title}</h3>
                </div>
                <div className="sticky-sidemenu-tz-happy-state-body">
                    <p>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default StickySideMenuHappyState;