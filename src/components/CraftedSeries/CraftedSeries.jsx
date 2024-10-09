import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectSlideMove } from "../../redux/slices/mainPageSlice";
import { useEffect } from "react";

const CraftedSeries = () => {
    const dispatch = useDispatch();
    const projectsState = useSelector((state) => state.mainPage.ourProjects);

    const slideNextHandler = (pos) => {
        dispatch(projectSlideMove({ position: pos}));
    };

    // useEffect(() => {
    //     const slides = setInterval(() => {
    //         dispatch(projectSlideMove({ position: 1}));
    //     }, 6000);
    //     return () => clearInterval(slides);
    // }, [projectsState.slides]);


    return (
        <React.Fragment>
            <section className="crafted-series-section">
                <div className="container">
                    <div className="crafted-series-title-wrap">
                        <h3 className="main-color-title">Примеры разработанных продуктов</h3>
                    </div>
                    <div className="crafted-series-row">
                        {projectsState.slides.map((slide) => {
                            return (
                                <React.Fragment key={slide.id}>
                                    {slide.id === projectsState.nextSlideId ? 
                                        <div className="crafted-series-slide-control">
                                            <span 
                                                className="slide-item-arrow-left"
                                                onClick={() => slideNextHandler(-1)}
                                            ></span>
                                            <span 
                                                className="slide-item-arrow-right"
                                                onClick={() => slideNextHandler(1)}
                                            ></span>
                                        </div>
                                    : null}
                                    <div className={slide.slideActive ? 'crafted-series-slide-item slide-active': 'crafted-series-slide-item'}>
                                        <div className="crafted-series-slide-img">
                                            <img src={slide.slideImage} alt={slide.projectName} />
                                        </div>
                                        <div className="crafted-series-slide-title">
                                            <h5>{slide.projectName}</h5>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default CraftedSeries;