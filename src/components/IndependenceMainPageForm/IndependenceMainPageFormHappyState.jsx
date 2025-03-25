import React from "react";


const IndependenceMainPageFormHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="independence-main-order-form-happy-state-wrap">
                <div className="independence-main-order-form-happy-state-close-wrap">
                    <span 
                        className="independence-main-order-form-happy-state-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="independence-min-order-form-happy-state-body">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default IndependenceMainPageFormHappyState;