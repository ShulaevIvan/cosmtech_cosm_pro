import React from "react";
import view from '../../img/view_gallery_icon.svg'
import ImageGalleryPopup from "./ImageGalleryPopup";

const ImageGallery = (props) => {
    const galleryState = props.galleryState;
    const { innerWidth: deviceWidth } = window;

    return (
        <React.Fragment>
            <div className="container">
                <div className="about-title-wrap">
                    <h2>{props.title}</h2>
                </div>
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
                        onClick={() => props.moveSlideHandler(deviceWidth < 600 ? -1 : -3)}
                    ></span>
                    <div className="image-gallery-row">
                        {galleryState.images.map((slideItem) => {
                            return (
                                <React.Fragment key={slideItem.id}>
                                    <div 
                                        className="image-gallery-item"
                                        onMouseEnter={() => props.hoverSlideHandler(slideItem.id)}
                                        onMouseLeave={() => props.hoverSlideHandler(slideItem.id, true)}
                                    >
                                        <div className="image-gallery-img-wrap">
                                            <img src={slideItem.img} alt={slideItem.imgAlt} />
                                            <span className={slideItem.active && !galleryState.imagePopup.active  ? 
                                                "image-gallery-icon-view active" : "image-gallery-icon-view"}
                                            >
                                                <img 
                                                    src={view} 
                                                    alt={`просмотр фотографии ${slideItem.imgAlt}`}
                                                    onClick={() => props.imagePopupHandler(slideItem, true)}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <span 
                        className="image-gallery-next-btn"
                        onClick={() => props.moveSlideHandler(deviceWidth < 600 ? 1 : 3)}
                    ></span>
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default ImageGallery;