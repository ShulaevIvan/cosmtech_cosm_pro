import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReviewsMainPagePopup from "./ReviewsMainPagePopup";
import { 
    reviewsMoveSlide, 
    cutReviewDescription, 
    reviewShowMore,
    showReviewPopup
} from "../../redux/slices/mainPageSlice";

import starFull from '../../img/star-full.svg';
import arrowRight from '../../img/review-arrow-right.svg';

const ReviewsMainPage = () => {
    const dispatch = useDispatch();
    const reviewsState = useSelector((state) => state.mainPage.reviews);

    const moveSlideHandler = (position) => {
        dispatch(reviewsMoveSlide({position: position}));
    };

    const showMoreHandler = (reviewItem) => {
        dispatch(reviewShowMore({review: reviewItem, status: reviewItem.showFullDescr ? false : true}));
    };

    const showMoreBtn = (reviewItem, show) => {
        
        if (show && !reviewItem.showFullDescr) {
            return (
                <React.Fragment>
                    {reviewItem.cutFullDescription}
                    <span 
                        className="review-show-more"
                        onClick={() => showMoreHandler(reviewItem)}
                    >развернуть</span>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                {reviewItem.reviewDescription}
                <span 
                    className="review-show-more"
                    onClick={() => showMoreHandler(reviewItem)}
                >свернуть</span>
            </React.Fragment>
        )
    };

    const reviewPopupHandler = () => {
        dispatch(showReviewPopup({status: reviewsState.reviewPopupActive ? false : true}));
    };

    useEffect(() => {
        reviewsState.reviewsItems.map((reviewItem) => {
            if (reviewItem.reviewDescription.length > 366) {
                dispatch(cutReviewDescription({review: reviewItem, maxLength: 366}));
            } 
        });
    }, []);

    return (
        <React.Fragment>
            <section>
            <div className="reviews-mainpage-wrap">
                <div className="container">
                    <div className="reviews-mainpage-title">
                        <h3 className="main-color-title">Отзывы наших клиентов</h3>
                    </div>
                    <div className="yandex-rating-wrap">
                        <div className="yandex-raiting-row">
                            <div className="yandex-rating-num">4.6</div>
                            <div className="yandex-rating-stars-row">
                               <span className="review-star">
                                    <img src={starFull} alt="review yandex star"/>
                               </span>
                               <span className="review-star">
                                    <img src={starFull} alt="review yandex star" />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} alt="review yandex star" />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} alt="review yandex star" />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} alt="review yandex star" />
                               </span>
                            </div>
                        </div>
                    </div>
                    <div className="yandex-rating-description-wrap">
                        <p>Наш рейтинг в <Link to={reviewsState.yandexMapUrl} target={'_blank'}><span className="yandex-sym-red">Я</span>ндекс картах</Link></p>
                    </div>
                    <div className="yandex-reviews-row">
                        {reviewsState.reviewsItems.map((reviewItem) => {
                            return (
                                <React.Fragment key={reviewItem.id}>
                                    <div className="yandex-reviews-item">
                                        <div className="yandex-reviews-userinfo">
                                            <div className="yandex-reviews-userinfo-img-wrap">
                                                <img src={reviewItem.userAvatar} alt={`${reviewItem.userName} ${reviewItem.userSecondName} отзыв клиента`} />
                                            </div>
                                            <div className="yandex-reviews-userinfo-title">
                                                <span className="yandex-reviews-userinfo-name">{reviewItem.userName}</span>
                                                <span className="yandex-reviews-userinfo-second">{reviewItem.userSecondName}</span>
                                            </div>
                                            <div className="yandex-reviews-review-stars">
                                                <span className="review-star"><img src={starFull} alt="star" /></span>
                                                <span className="review-star"><img src={starFull} alt="star" /></span>
                                                <span className="review-star"><img src={starFull} alt="star" /></span>
                                                <span className="review-star"><img src={starFull} alt="star" /></span>
                                                <span className="review-star"><img src={starFull} alt="star" /></span>
                                            </div>
                                            <div className="yandex-reviews-user-original-link">
                                                {reviewItem.userOriginalLink ? <Link>ссылка на отзыв</Link> : null}
                                                
                                            </div>
                                        </div>
                                        <div className="yandex-reviews-review-description">
                                            <p>
                                                {reviewItem.reviewDescription.length > 366 ? 
                                                    showMoreBtn(reviewItem, true) 
                                                : reviewItem.reviewDescription}
                                            </p>
                                            
                                            
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="yandex-reviews-control-row">
                        <div className="yandex-reviews-arrow-right-wrap">
                            <span 
                                className="yandex-reviews-arrow-right"
                                onClick={() => moveSlideHandler('right')}
                            ><img src={arrowRight} alt="следующий отзыв ООО космотех"/></span>
                        </div>
                    </div>
                    <div className="send-review-block-wrap">
                        <div className="send-review-block-title-wrap">
                            <h3>Оставьте отзыв о нашей работе</h3>
                        </div>
                        <div className="send-review-block-btn-wrap">
                            <span 
                                className="send-review-btn"
                                onClick={reviewPopupHandler}
                            >Написать</span>
                        </div>
                    </div>
                </div>
            </div>
            {reviewsState.reviewPopupActive ? 
                <ReviewsMainPagePopup 
                    popupHandler={reviewPopupHandler}
                    reviewsPlaces={reviewsState.reviewsPlaces}
                /> 
            : null}
            </section>
        </React.Fragment>
    )
};

export default ReviewsMainPage;