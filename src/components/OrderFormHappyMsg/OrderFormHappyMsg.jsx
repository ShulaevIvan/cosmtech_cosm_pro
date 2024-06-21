import React from "react";

const OrderFormHappyMsg = (props) => {
    return (
        <React.Fragment>
            <div className="form-happy-state-wrap">
                <h3>{`${props.happyMsg}`}</h3>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    )
};

export default OrderFormHappyMsg;