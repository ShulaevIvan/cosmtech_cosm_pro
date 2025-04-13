import React from "react";


const VideoBlock = (props) => {
    const videoSrc = props.videoUrl ? props.videoUrl : '/static/media/compress_promo_video.051eb1070a3ecf4d0690.mp4';
    const mode = props.displayMode;
    return (
        <React.Fragment>
            {mode === 'textVideo' ? 
                <React.Fragment>
                     {props.videoTitle ? <h3>{props.videoTitle}</h3>: null}
                    <div className="article-news-video-block-row">
                        <div className="article-news-video-block-item video"><video controls><source src={videoSrc} type="video/mp4"/></video></div>
                        <div className="article-news-video-block-item">
                        <p>{props.videoText}</p>
                        </div>
                    </div>
                </ React.Fragment>
            
            : null}
            {!mode || mode === 'video' ? 
                <React.Fragment>
                    <div className="article-news-video-block-wrap">
                    {props.videoTitle ? <h3>{props.videoTitle}</h3>: null}
                        <video controls><source src={videoSrc} type="video/mp4"/></video>
                    </div>
                </React.Fragment>
            
            : null}
           
            
        </React.Fragment>
    )
};


export default VideoBlock