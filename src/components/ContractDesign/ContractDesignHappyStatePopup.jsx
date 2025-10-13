import React from "react";

const ContractDesignHappyStatePopup = (props) => {
    return (
        <React.Fragment>
            <div className="popup-design-service-happystate-wrap">
                <span 
                    className="sticky-sidemenu-tz-popup-close-btn"
                    onClick={props.closePopupHandler}
                ></span>
                <div className="popup-design-service-happystate-body">
                    <h3>{props.title}</h3>
                    <div className="popup-design-service-happystate-text-wrap">
                        <p>{props.description}</p>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContractDesignHappyStatePopup;