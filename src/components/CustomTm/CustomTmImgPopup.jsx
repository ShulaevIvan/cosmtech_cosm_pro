import React from "react";

const CustomTmImgPopup = (props) => {
    return (
        <React.Fragment>
            <div className="custom-tm-img-popup-background-wrap">
                <div className="custom-tm-img-popup-body-wrap">
                    <div className="custom-tm-img-popup-close-btn-wrap">
                        <span 
                            className="custom-tm-img-popup-close-btn"
                            onClick={() => props.closeHandler(
                                props.mainTmItem.id,
                                props.mainTmItem.name, 
                                props.galleryItem.id, 
                                false,
                            )}
                        ></span>
                    </div>
                    <div className="custom-tm-img-wrap">
                        <img src={props.galleryItem.fullImg} alt={props.galleryItem.altMinImg} />
                        <div className="custom-tm-img-description">
                            <p>{props.galleryItem.shortDescr}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CustomTmImgPopup;