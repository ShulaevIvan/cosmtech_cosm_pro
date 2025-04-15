import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import promo_video from '../../video/compress_promo_video.mp4';

const VideoBlock = (props) => {
    const mode = props.displayMode;
    const checkVideo = props.videoUrl && props.videoFile.mime
    return (
        <React.Fragment>
            {checkVideo && mode === 'textVideo' ? 
                <React.Fragment>
                     {props.videoTitle ? <h3>{props.videoTitle}</h3>: null}
                    <div className="article-news-video-block-row">
                        <div className="article-news-video-block-item video"><video controls><source src={props.videoUrl} type={props.videoFile.mime}/></video></div>
                        <div className="article-news-video-block-item">
                        <p>{props.videoText}</p>
                        </div>
                    </div>
                </ React.Fragment>
            
            : null}
            {checkVideo && mode === 'video' ? 
                <React.Fragment>
                    <div className="article-news-video-block-wrap">
                    {props.videoTitle ? <h3>{props.videoTitle}</h3>: null}
                        <video controls><source src={props.videoUrl} type={props.videoFile.mime} /></video>
                    </div>
                </React.Fragment>
            
            : null}
           
            
        </React.Fragment>
    )
};


export default VideoBlock