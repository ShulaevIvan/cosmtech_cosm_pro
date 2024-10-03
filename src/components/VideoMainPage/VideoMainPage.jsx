import React from "react";
import { useSelector } from "react-redux";
import promo_video from '../../video/compress_promo_video.mp4';

const VideoMainPage = () => {
    const videoBlockState = useSelector((state) => state.mainPage.videoMainPage);
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="video-mainpage-row">
                        <div className="video-mainpage-wrap">
                            <video controls>
                                <source src={promo_video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="video-mainpage-textblock-wrap">
                            <h2>{videoBlockState.textVideoTitle}</h2>
                            {videoBlockState.textVideo.map((textPart) => {
                                return (
                                    <React.Fragment key={textPart.id}>
                                         <p>{textPart.text}</p>
                                    </React.Fragment>
                                )
                            })}
                            <div className="video-mainpage-prezent-wrap">
                                <div className="video-mainpage-prezent-btn">
                                    <span className="video-mainpage-prezent-btn">презентация</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
};

export default VideoMainPage;