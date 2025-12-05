import React from "react";

const CareCosmeticsOrderPopupHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-popup-bg-wrap">
                <div className="decorative-cosmetic-order-popup-wrap">
                    <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                        <span 
                            className="decorative-cosmetic-consult-popup-close-btn"
                            onClick={props.closeHandler}
                        ></span>
                    </div>
                    <div className="decorative-cosmetic-order-popup-body">
                        <div className="decorative-cosmetic-order-popup-title">
                            <h3>{props.title}</h3>
                        </div>
                        <p>Ваш номер запроса: <strong>{props.orderNumber}</strong></p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
                    
                </React.Fragment>
    )
};

export default CareCosmeticsOrderPopupHappyState;