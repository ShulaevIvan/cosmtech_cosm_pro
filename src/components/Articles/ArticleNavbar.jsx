import React from "react";
import { selectArticleCategory } from "../../redux/slices/articlesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ArticleNavbar = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.articles);
    const articleCategory = useSelector((state) => state.articles.articleCategories.filter(
        (item) => articles.some((articleItem) => articleItem.articleCategory === item.name))
    );

    const filterArticlesHandler = (catType) => {
        dispatch(selectArticleCategory({category: catType}));
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="inner-article-navbar-wrap">
                    <div className="inner-article-navbar-row">
                        <div className="inner-article-navbar-item">
                            <Link  to={`/articles`} className="inner-article-navbar-btn">Назад к статьям</Link>
                        </div>
                        {articleCategory.filter((item) => item.name !== 'default').map((catItem) => {
                            return (
                                <React.Fragment key={catItem.id}>
                                    <div className="inner-article-navbar-item">
                                        <Link
                                            to={`/articles`}
                                            onClick={() => filterArticlesHandler(catItem.name)} 
                                            className="inner-article-navbar-btn"
                                        >{catItem.title}</Link>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ArticleNavbar;