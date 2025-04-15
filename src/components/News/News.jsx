import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import NewsArticle from "./NewsArticle";
import demoIcon from '../../img/news/30x30.png';

import { 
    hideExcessNews,
    showMoreNews,
    showNewsPopup,
    fetchAllNews
} from "../../redux/slices/newsSlice";

const News = () => {
    const dispatch = useDispatch();
    const newsState = useSelector((state) => state.news);

    const showNewsPopupHandler = (newsId) => {
        dispatch(showNewsPopup({newsId: newsId}));
    };
    
    const showMoreNewsHandler = () => {
        dispatch(showMoreNews());
    };

    useEffect(() => {
        dispatch(hideExcessNews());
    }, []);

    useEffect(() => {
        dispatch(fetchAllNews());
        console.log(newsState.newsItems)
    }, [])

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
                                        <div className="news-company-social-item"><img src={demoIcon} alt="" /> <Link>Вконтакте</Link></div>
                                        <div className="news-company-social-item"><img src={demoIcon} alt="" /> <Link>Яндекс</Link></div>
                                    </div>
                                </div>

                                <div className="news-company-currency-wrap">
                                    <h3>Курсы валют на сегодня</h3>
                                    <div className="news-company-currency-item">
                                        <img src={demoIcon} alt="test" /> Доллар США: 84.84 руб
                                    </div>
                                    <div className="news-company-currency-item">
                                        <img src={demoIcon} alt="test" /> Евро: 86.33 руб
                                    </div>
                                    <p>Данные взяты c <Link to={'https://www.cbr.ru'} target={'_blank'}>cbr.ru</Link>.</p>
                                </div>

                                <div className="news-company-form-wrap">
                                    <h3>Обратная связь</h3>
                                    <form className="news-company-form">
                                        <label>Имя</label>
                                        <div className="news-company-form-item-wrap">
                                            <input type="text" />
                                        </div>
                                        <label>Email</label>
                                        <div className="news-company-form-item-wrap">
                                            <input type="text" />
                                        </div>
                                        <label>Комментарий</label>
                                        <div className="news-company-form-item-wrap">
                                            <textarea></textarea>
                                        </div>
                                        <div className="news-company-form-send-btn-wrap">
                                            <Link className="news-company-form-send-btn">Отправить</Link>
                                        </div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default News;