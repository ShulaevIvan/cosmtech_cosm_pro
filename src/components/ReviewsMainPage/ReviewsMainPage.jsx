import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { reviewsMoveSlide } from "../../redux/slices/mainPageSlice";

import starEmpty from '../../img/star-empty.svg';
import starFull from '../../img/star-full.svg';
import starHalf from '../../img/star-half.svg';
import arrowLeft from '../../img/review-arrow-left.svg';
import arrowRight from '../../img/review-arrow-right.svg';
import userPhoto from '../../img/user-review-img-holder.png'

const ReviewsMainPage = () => {
    const dispatch = useDispatch();
    const reviewsState = useSelector((state) => state.mainPage.reviews);

    const moveSlideHandler = (position) => {
        dispatch(reviewsMoveSlide({position: position}))
    };

    const showMoreHandler = () => {
        console.log(showMoreHandler);
    };

    const cutReviewString = (reviewStr) => {
        if (reviewStr.length > 366) {
            return reviewStr.substr(0, 366);
        }
        return reviewStr;
    };

    useEffect(() => {
        console.log(reviewsState.currentSlidePosition);
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
                                    <img src={starFull} />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} />
                               </span>
                               <span className="review-star">
                                    <img src={starFull} />
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
                                            <div className="yandex-reviews-userinfo-img-wrap"><img src={userPhoto} alt="userInfo" /></div>
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
                                                <Link>ссылка на отзыв</Link>
                                            </div>
                                        </div>
                                        <div className="yandex-reviews-review-description">
                                            <p>
                                                {reviewItem.reviewDescription.length > 366 ? 
                                                    <React.Fragment>
                                                        {cutReviewString(reviewItem.reviewDescription)}
                                                        <span className="review-show-more">
                                                            <Link>развернуть...</Link>
                                                        </span>
                                                    </React.Fragment> 
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
                            ><img src={arrowRight} /></span>
                        </div>
                    </div>
                    <div className="send-review-block-wrap">
                        <div className="send-review-block-title-wrap">
                            <h3>Оставьте отзыв о нашей работе</h3>
                        </div>
                        <div className="send-review-block-btn-wrap">
                            <span className="send-review-btn">Отправить</span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    )
};

export default ReviewsMainPage;