import React from "react";
import { Link } from "react-router-dom";

const AboutVideoPrezentation = (props) => {
    const prezentationState = props.prezentationState;
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-company-prezentation-row">
                    <div className="about-company-text-content-wrap">
                        <div className="about-company-title-wrap">
                            <h2>Удобство работы с нами</h2>
                        </div>
                        <div className="about-company-icons-row">
                            {prezentationState.prezentationIcons.map((prezentationItem) => {
                                return (
                                    <React.Fragment key={prezentationItem.id}>
                                        <div className="about-company-icon-item">
                                            <div className="about-company-icon">
                                                <img src={prezentationItem.img} alt={prezentationItem.imgAlt} />
                                            </div>
                                            <div className="about-company-icon-text">{prezentationItem.title}</div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>

                        <div className="about-company-prezentation-btn-row">
                            <div className="about-company-prezentation-link-wrap">
                                <Link 
                                    className="about-company-prezentation-btn"
                                    to={prezentationState.prezentationFileUrl}
                                    target={'_blank'}
                                >Презентация</Link>
                            </div>
                        </div>
                    </div>
                    <div className="about-company-video-content-wrap">
                        <div className="about-company-video-wrap">
                            <video controls>
                                <source src={prezentationState.prezentationVideo.file} type={prezentationState.prezentationVideo.type} />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default AboutVideoPrezentation;