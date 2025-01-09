import React from "react";
import demo from '../../img/imageGalery/demo1.png';
import demo400 from '../../img/400x400.png'

const ImageGalery = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="image-galery-wrap">
                    <span className="image-galery-prev-btn"></span>
                    <div className="image-galery-row">
                        <div className="image-galery-item">
                            <div className="image-galery-img-wrap">
                                <img src={demo400} alt="#" />
                            </div>
                        </div>
                        <div className="image-galery-item">
                            <div className="image-galery-img-wrap active">
                                <img src={demo400} alt="#" />
                                <span className="image-galery-icon-view">view</span>
                            </div>
                        </div>
                        <div className="image-galery-item">
                            <div className="image-galery-img-wrap">
                                <img src={demo400} alt="#" />
                            </div>
                        </div>
                        <div className="image-galery-item">
                            <div className="image-galery-img-wrap">
                                <img src={demo400} alt="#" />
                            </div>
                        </div>
                        <div className="image-galery-item">
                            <div className="image-galery-img-wrap">
                                <img src={demo400} alt="#" />
                            </div>
                        </div>
                        <div className="image-galery-item">
                            <div className="image-galery-img-wrap">
                                <img src={demo400} alt="#" />
                            </div>
                        </div>
                    </div>
                    <span className="image-galery-next-btn"></span>
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default ImageGalery;