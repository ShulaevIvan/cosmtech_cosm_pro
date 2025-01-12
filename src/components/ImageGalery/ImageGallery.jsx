import React from "react";
import view from '../../img/view_gallery_icon.svg'
import ImageGalleryPopup from "./ImageGalleryPopup";

const ImageGallery = (props) => {
    const galleryState = props.galleryState;

    return (
        <React.Fragment>
            <div className="container">
                <div className={galleryState.imagePopup.active  ? "image-gallery-wrap view-mode" : "image-gallery-wrap"}>
                    {galleryState.imagePopup.active ? 
                        <ImageGalleryPopup 
                            popupState={galleryState.imagePopup}
                            popupCloseHandler={props.imagePopupHandler}
                            nextSlide={props.imagePopupNextSlide}
                        /> 
                    : null}
                    <span 
                        className="image-gallery-prev-btn"
                        onClick={() => props.moveSlideHandler(-3)}
                    ></span>
                    <div className="image-gallery-row">
                        {galleryState.images.map((slideItem) => {
                            return (
                                <React.Fragment key={slideItem.id}>
                                    <div 
                                        className="image-gallery-item"
                                        onMouseEnter={() => props.hoverSlideHandler(slideItem.id)}
                                    >
                                        <div className="image-gallery-img-wrap">
                                            <img src={slideItem.img} alt={slideItem.imgAlt} />
                                            {slideItem.active && !galleryState.imagePopup.active ? 
                                                <span className="image-gallery-icon-view">
                                                    <img 
                                                        src={view} 
                                                        alt={`просмотр фотографии ${slideItem.imgAlt}`}
                                                        onClick={() => props.imagePopupHandler(slideItem, true)}
                                                    />
                                                </span>
                                            : null}
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <span 
                        className="image-gallery-next-btn"
                        onClick={() => props.moveSlideHandler(3)}
                    ></span>
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default ImageGallery;