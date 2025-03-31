import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { articlesSort, articleCategory, selectArticle } from "../../redux/slices/articlesSlice";

import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";

const Articles = () => {
    const dispatch = useDispatch();
    const articlesState = useSelector((state) => state.articles);

    const articlesSortHandler = (sortType) => {
        dispatch(articlesSort({sortType: sortType}));
    };

    const selectCategoryHandler = (catType) => {
        dispatch(articleCategory({category: catType}))
    };

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="articles-control-wrap">
                            <div className="article-filters-row">
                                <div className="filter-description">
                                    <h4>Сортировка:</h4>
                                </div>
                                <div className={articlesState.articlesSorted.byDate ? "article-filter-item active" : "article-filter-item"}>
                                    <span onClick={() => articlesSortHandler('dateSort')}>Дата</span>
                                </div>
                                <div className={articlesState.articlesSorted.byAuthor ? "article-filter-item active" : "article-filter-item"}>
                                    <span onClick={() => articlesSortHandler('authorSort')}>Автор</span>
                                </div>
                                <div className="article-filter-item">
                                    <span onClick={articlesSortHandler}>Сбросить</span>
                                </div>
                            </div>
                            <div className="article-theme-filter-wrap">
                                <select 
                                    name="article-catigories" 
                                    id="select-article-catigories"
                                    onChange={(e) => selectCategoryHandler(e.target.value)}
                                >
                                    {articlesState.articleCategories.map((catItem) => {
                                        return (
                                            <React.Fragment key={catItem.id}>
                                                <option value={catItem.name}>{catItem.title}</option>
                                            </React.Fragment>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="articles-main-row">
                            {articlesState.articles.map((articleItem) => {
                                return (
                                    <React.Fragment key={articleItem.id}>
                                        <article className="article-main-item">
                                            <div className="article-min-item-img-wrap">
                                                <Link to={articleItem.url}>
                                                    <img className="test123" src={articleItem.imgMini} alt="#" />
                                                </Link>
                                            </div>
                                            <div className="article-main-item-info-wrap">
                                                <div className="article-author">
                                                    <span>Автор: <strong>{articleItem.author}</strong></span>
                                                </div>
                                                <div className="article-date">
                                                    <span>Дата публикации: 
                                                        <strong>{articleItem.articleDate.toLocaleDateString('ru')}</strong>
                                                    </span>
                                                </div>
                                                <div className="article-main-item-info-content">
                                                    <Link to={articleItem.url}>
                                                        <h3>{articleItem.title}</h3>
                                                    </Link>
                                                    <p>{articleItem.shortDescription}</p>
                                                </div>
                                                <div className="article-main-item-info-btn-wrap">
                                                    <Link 
                                                        className="article-main-item-info-btn"
                                                        to={articleItem.url}
                                                    >Читать далее</Link>
                                                </div>
                                            </div>
                                        </article>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};


export default Articles;