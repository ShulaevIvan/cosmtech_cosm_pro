import React from "react";
import view from '../../img/view_gallery_icon.svg'
import ImageGalleryPopup from "./ImageGalleryPopup";

const ImageGallery = (props) => {
    const galleryState = props.galleryState;

    return (
        <React.Fragment>
            <div className="container">
                <div className="image-gallery-wrap">
                    {galleryState.imagepopup.active ? <ImageGalleryPopup /> : null}
                    <span 
                        className="image-gallery-prev-btn"
                        onClick={() => props.moveSlideHandler(1)}
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
                                            {slideItem.active ? 
                                                <span className="image-gallery-icon-view">
                                                    <img 
                                                        src={view} 
                                                        alt="#"
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
                        onClick={() => props.moveSlideHandler(-1)}
                    ></span>
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default ImageGallery;