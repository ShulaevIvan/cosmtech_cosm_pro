import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import NewsArticle from "./NewsArticle";
import CurrencyCourse from "./CurrencyCourse";
import NewsMainForm from "./NewsMainForm";

import { 
    hideExcessNews,
    showMoreNews,
    showNewsPopup,
    fetchAllNews,
    mainNewsInput,
    validateMainNewsForm,
    mainNewsFormHappyStatePopup
} from "../../redux/slices/newsSlice";

const News = () => {
    const dispatch = useDispatch();
    const newsState = useSelector((state) => state.news);
    const newsFormRefs = [
        {name: 'name', ref: useRef(null)},
        {name: 'phone', ref: useRef(null)},
        {name: 'comment', ref: useRef(null)},
    ];

    const showNewsPopupHandler = (newsId) => {
        dispatch(showNewsPopup({newsId: newsId}));
    };
    
    const showMoreNewsHandler = () => {
        dispatch(showMoreNews());
    };

    const findInputRef = (inputName) => {
        return newsFormRefs.find((item) => item.name === inputName).ref;
    };

    const newsFormMainHandler = (inputId, inputType, inputRef, clearInput) => {
        dispatch(mainNewsInput({
            fieldId: inputId,
            fieldType: inputType, 
            fieldValue: inputRef.value,
            clear: clearInput ? true : false
        }));
    };

    const newsFormMainClearHandler = (e, inputId, inputType) => {
        if (e.key === 'Backspace') {
            dispatch(mainNewsInput({
                fieldId: inputId,
                fieldType: inputType, 
                fieldValue:'',
                clear: true
            }));
            return;
        }
    };

    const newsFormMainSendHandler = () => {
        console.log('etst')
    };

    const newsMainFormHappyStateHandler = () => {
        dispatch(mainNewsFormHappyStatePopup());
    };

    useEffect(() => {
        dispatch(hideExcessNews());
    }, []);

    useEffect(() => {
        dispatch(fetchAllNews());
    }, []);

    useEffect(() => {
        dispatch(validateMainNewsForm());
    }, [newsState.newsFormMainFields])

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="news-preview-main-row">
                            <div className="news-preview-main-content">
                                {newsState.newsItems && newsState.newsItems.length > 0 ? newsState.newsItems.map((newsItem) => {
                                    return (
                                        <React.Fragment key={Math.random()}>
                                            {newsItem.newsPopup.active ? 
                                                <NewsArticle
                                                    articleId={newsItem.id} 
                                                    closeHandler={showNewsPopupHandler} 
                                                    newsContent={newsItem.newsContent}
                                                    newsDate={newsItem.date.toLocaleDateString('ru')}
                                                /> 
                                            : null}
                                            <div className="news-preview-main-item-row">
                                                <div className="news-preview-main-item-content">
                                                    <div className="news-preview-main-item-content-title">
                                                        <h3>{newsItem.title}</h3>
                                                        <h4>Дата: {newsItem.date.toLocaleDateString('ru')}</h4>
                                                    </div>
                                                    <div className="news-preview-main-item-content-description">
                                                        <p>{newsItem.shortDescription}</p>
                                                    </div>
                                                    <div className="news-preview-main-item-btn">
                                                        <Link onClick={() => showNewsPopupHandler(newsItem.id)}>Подробнее</Link>
                                                    </div>
                                                </div>
                                                <div className="news-preview-main-item-img">
                                                    <Link><img src={newsItem.minImg.img} alt={newsItem.minImg.alt} /></Link>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                }) : null}
                                {!newsState.showMoreBtnDisabled ? 
                                    <React.Fragment>
                                        <div 
                                            className="news-preview-show-more-wrap" 
                                            onClick={showMoreNewsHandler}
                                        >
                                            <Link 
                                            ><span>Показать больше</span></Link>
                                        </div>
                                    </React.Fragment>
                                : null}
                            </div>
                            <aside className="news-preview-main-asside-wrap">
                                <div className="news-company-social-wrap">
                                    <h3>Мы в соцсетях:</h3>
                                    <div className="news-company-social-column">
                                        {newsState.socialBlock.map((socialItem) => {
                                            return (
                                                <React.Fragment key={Math.random()}>
                                                    <div className="news-company-social-item">
                                                        <img src={socialItem.img} alt={socialItem.imgAlt} /> 
                                                        <Link to={socialItem.url} target={'_blank'}>
                                                            {socialItem.urlText}
                                                        </Link>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                                <CurrencyCourse />
                                <NewsMainForm
                                    newsState={newsState} 
                                    findInputRef={findInputRef}
                                    inputHandler={newsFormMainHandler}
                                    clearInputHandler={newsFormMainClearHandler}
                                    sendFormHandler={newsFormMainSendHandler}
                                    happyStateHandler={newsMainFormHappyStateHandler}
                                />
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default News;