import React from "react";
import { Link } from "react-router-dom";

const ReviewsMainPagePopup = (props) => {
    return (
        <React.Fragment>
            <div className="reviews-mainpage-popup-wrap">
                <div className="service-popup-close-wrap">
                    <span
                        className="service-popup-close-btn"
                        onClick={() => props.popupHandler(false)}
                    ></span>
                </div>
                <div className="review-place-row">
                    {props.reviewsPlaces.map((reviewPlace) => {
                        return (
                            <React.Fragment key={reviewPlace.id}>
                                <div className="review-place-item-wrap">
                                    <Link to={reviewPlace.placeUrl} target={'_blank'}>
                                        <img src={reviewPlace.placeImg} alt={reviewPlace.placeDescription} />
                                    </Link>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
};

export default ReviewsMainPagePopup;