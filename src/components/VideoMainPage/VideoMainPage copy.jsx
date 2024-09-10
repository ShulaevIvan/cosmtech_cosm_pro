import React from "react";
import promo_video from '../../video/compress_promo_video.mp4';

const VideoMainPage = () => {

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="video-mainpage-title-wrap">
                        <div className="video-mainpage-title">
                            <h2 className="main-color-title">Где качество сочетается с точностью.</h2>
                        </div>
                        <div className="video-mainpage-description">
                            <p>
                            Мы разработаем, произведем и упакуем по вашему запросу косметику  в необходимых объемах и точно в срок.
                            </p>
                        </div>
                    </div>
                    <div className="video-mainpage-wrap">
                        <video controls>
                            <source src={promo_video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default VideoMainPage;