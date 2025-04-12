import React from "react";


const VideoBlock = (props) => {
    const videoSrc = props.video ? props.videoPath : '/static/media/compress_promo_video.051eb1070a3ecf4d0690.mp4';
    const mode = props.displayMode;
    return (
        <React.Fragment>
            {mode === 'textVideo' ? 
                <React.Fragment>
                    <div className="article-news-video-block-row">
                        <div className="article-news-video-block-item video"><video controls><source src={videoSrc} type="video/mp4"/></video></div>
                        <div className="article-news-video-block-item">
                        <p>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.</p>
                        </div>
                    </div>
                </ React.Fragment>
            
            : null}
            {!mode || mode === 'video' ? 
                <React.Fragment>
                    <div className="article-news-video-block-wrap">
                        <video controls><source src={videoSrc} type="video/mp4"/></video>
                    </div>
                </React.Fragment>
            
            : null}
           
            
        </React.Fragment>
    )
};


export default VideoBlock