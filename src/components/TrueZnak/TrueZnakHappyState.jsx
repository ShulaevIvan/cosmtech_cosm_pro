import React from "react";

const TrueZnakHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-consult-popup-wrap">
                <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                    <span 
                        className="decorative-cosmetic-consult-popup-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="decorative-cosmetic-consult-popup-body">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default TrueZnakHappyState;