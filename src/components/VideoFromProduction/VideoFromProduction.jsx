import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { 
    aboutProductionVideoMenu,
    aboutProductionSelectVideo
} from '../../redux/slices/innerPageSlice';

const VideoFromProduction = () => {
    const dispatch = useDispatch();
    const videoProductionState = useSelector((state) => state.innerPage.about.aboutVideoProduction);
    const selectedMenu = videoProductionState.menuCategories.find((item) => item.selected);
    const maxSelectedVideo = selectedMenu.videos.length > 0 ? selectedMenu.videos.length : 0;
    const selectedVideo = selectedMenu.videos.find((videoItem) => videoItem.selected);
    const selectedVideoIndex = selectedMenu.videos.findIndex((item) => item.id === selectedVideo.id) + 1;

    const videoMenuHandler = (id, name) => {
        dispatch(aboutProductionVideoMenu({catId: id, catName: name}));
    };

    const slideVideoHandler = () => {
        dispatch(aboutProductionSelectVideo());
    };


    return (
        <React.Fragment>
            <div className="video-from-production-main-wrap">
            <div className="container">
                <div className="video-from-production-wrap">
                    <div className="video-from-production-title-wrap">
                        <h3>Видео с производства</h3>
                    </div>
                    <div className="video-from-production-titles-row">
                        {videoProductionState.menuCategories.map((categoryItem) => {
                            return (
                                <React.Fragment key={categoryItem.id}>
                                    <div className="video-from-production-title-item">
                                        <Link 
                                            className={categoryItem.selected ? 'selected' : null}
                                            onClick={() => videoMenuHandler(categoryItem.id, categoryItem.name)}
                                        >{categoryItem.title}</Link>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div className="video-from-production-content-row">
                    <div className="video-content-wrap">
                        <React.Fragment key={selectedVideo.video}>
                            <video controls className="video-content-ani">
                                <source src={selectedVideo.video} type='video/mp4;' />
                            </video>
                        </React.Fragment>
                        <div className="video-content-controls-wrap">
                            <div className="video-content-controls-btn-wrap">
                                <span 
                                    className="video-content-controls-btn-prev"
                                    onClick={slideVideoHandler}
                                ></span>
                                <span className="video-content-controls-counter">{`${selectedVideoIndex} / ${maxSelectedVideo}`}</span>
                                <span 
                                    className="video-content-controls-btn-next"
                                    onClick={slideVideoHandler}
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div className="text-content-wrap">
                        <h3>{selectedMenu.content.title}</h3>
                        {selectedMenu.content.textParagraphs.map((textItem) => {
                            return (
                                <React.Fragment key={Math.random()}>
                                    <p className="video-content-ani">{textItem}</p>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            </div>
          
        </React.Fragment>
    )
};

export default VideoFromProduction;