import React from "react";
import { Link } from "react-router-dom";
import testVideo from '../../video/compress_promo_video.mp4';

const VideoFromProduction = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="video-from-production-wrap">
                    <div className="video-from-production-title-wrap">
                        <h3>Видео с производства</h3>
                    </div>
                    <div className="video-from-production-titles-row">
                        <div className="video-from-production-title-item">
                            <Link className="selected">Тубозапаечные машины</Link>
                        </div>
                        <div className="video-from-production-title-item">
                            <Link>Тубозапаечные машины</Link>
                        </div>
                        <div className="video-from-production-title-item">
                            <Link>Тубозапаечные машины</Link>
                        </div>
                        <div className="video-from-production-title-item">
                            <Link>Тубозапаечные машины</Link>
                        </div>
                        <div className="video-from-production-title-item">
                            <Link>Тубозапаечные машины</Link>
                        </div>
                        <div className="video-from-production-title-item">
                            <Link>Тубозапаечные машины</Link>
                        </div>
                    </div>
                </div>
                <div className="video-from-production-content-row">
                    <div className="video-content-wrap">
                        <video controls>
                            <source src={testVideo} />
                        </video>
                        <div className="video-content-next-video-btn-wrap">
                            <span>След видео</span>
                        </div>
                    </div>
                    <div className="text-content-wrap">
                        <p>
                            Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                            когда нужно быстро заполнить макеты или прототипы содержимым. 
                            Это тестовый контент, который не должен нести никакого смысла, 
                            лишь показать наличие самого текста или продемонстрировать типографику в деле.
                        </p>
                    </div>
                </div>
            </div>
          
        </React.Fragment>
    )
};

export default VideoFromProduction;