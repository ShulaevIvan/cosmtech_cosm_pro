import React from "react";


const ImageGalleryPopup = (props) => {
    const popupState = props.popupState;

    return (
        <React.Fragment>
            <div className="image-gallery-popup-background">
                <span 
                    className="image-gallery-popup-close-btn"
                    onClick={() => props.popupCloseHandler(false)}
                ></span>
                <div className="image-gallery-popup-wrap">
                    <span 
                        className="image-gallery-popup-arrow-left"
                        onClick={() => props.nextSlide(-1)}
                    ></span>
                    <div className="image-gallery-popup-img-item-wrap">
                        <img src={popupState.image} alt={popupState.imageAlt} />
                        <div className="image-gallery-popup-img-item-description">
                            {popupState.imageDescription}
                        </div>
                    </div>
                    <span 
                        className="image-gallery-popup-arrow-right"
                        onClick={() => props.nextSlide(1)}
                    ></span>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ImageGalleryPopup;