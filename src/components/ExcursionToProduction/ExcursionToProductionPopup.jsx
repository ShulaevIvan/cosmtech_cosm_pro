import React from "react";


const ExcursionToProductionPopup = (props) => {
    return (
        <React.Fragment>
            <div className="excursion-production-popup-wrap">
                <span
                    onClick={props.popupHandler} 
                    className="excursion-production-close-btn"
                ></span>
                <div className="excursion-production-popup-body">
                    <div className="excursion-production-title-wrap">
                        <h2>Title</h2>
                    </div>
                    <div className="excursion-production-form-row">
                        <div className="excursion-production-form-input-wrap">
                            <label>Title</label>
                            <div className="excursion-production-form-input-wrap">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="excursion-production-form-input-wrap">
                            <label>Title2</label>
                            <div className="excursion-production-form-input-wrap">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="excursion-production-form-input-wrap">
                            <label>Title3</label>
                            <div className="excursion-production-form-input-wrap">
                                <input type="date" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ExcursionToProductionPopup;