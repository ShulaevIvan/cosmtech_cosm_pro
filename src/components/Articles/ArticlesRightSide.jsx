import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import demoImg from '../../img/articles/otherArticleDemo.png'
import test from '../../img/articles/independenceContractMin.png'

const ArticlesRightSide = (props) => {
    const articles = useSelector((state) => state.articles);
    const selectedArticle = props.selectedArticle;

    return (
        <React.Fragment>
            <div className="article-page-right-bar">
                <div className="article-page-right-bar-title">
                    <h3>Другие статьи</h3>
                </div>
                <div className="other-article-row">
                    {articles && selectedArticle ? 
                        articles.articles.filter((item) => item.id !== selectedArticle.id).map((articleItem) => {
                            return (
                                <React.Fragment key={articleItem.id}>
                                    <Link to={articleItem.url}>
                                        <div className="other-article-item">
                                            <img src={articleItem.imgMini} alt={articleItem.title} />
                                            <div className="other-article-item-date">
                                                    {`от ${articleItem.articleDate.toLocaleDateString('ru')}`}
                                                </div>
                                            <div className="other-article-item-info">
                                                
                                                <div className="other-article-item-title">{articleItem.title}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </React.Fragment>
                            )
                        })
                    : null}
                    
                </div>
            </div>
        </React.Fragment>
    )
};

export default ArticlesRightSide;