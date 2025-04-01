import React from "react";
import articleAuthor from '../../img/articleAuthor.svg';
import articleDate from '../../img/articleDate.svg';
import articleTime from '../../img/articleTime.svg';

const ArticleInfoHeader = (props) => {
    return (
        <React.Fragment>
            <div className="article-info-header-wrap">
                <div className="article-info-header-item">
                    <span className="article-info-icon">
                        <img src={articleDate} alt="#" />
                    </span>
                    <span className="article-info-text-header">Дата публикации: {props.date}</span>
                </div>
                <div className="article-info-header-item">
                    <span className="article-info-icon">
                        <img src={articleAuthor} alt="#" />
                    </span>
                    <span className="article-info-text-header">Автор: {props.author}</span>
                </div>
                <div className="article-info-header-item">
                    <span className="article-info-icon">
                        <img src={articleTime} alt="#" />
                    </span>
                    <span className="article-info-text-header">Время на прочтение: {props.time} мин</span>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ArticleInfoHeader;