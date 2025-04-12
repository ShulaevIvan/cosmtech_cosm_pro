import React from "react";
import banner1 from '../../img/articles/stmCosmeticBanner.jpg';
import articleDate from '../../img/articleDate.svg';
import VideoBlock from "./VideoBlock";
import BannerBlock from "./BannerBlock";
import TextBlock from "./TextBlock";
import LinksBlock from "./LinksBlock";
import { Link } from "react-router-dom";

const NewsArticle = (props) => {
    const paragraphs = props.newsContent.paragraphs;
    const links = [{name: 'test', url: 'test.ru'}, {name: 'test', url: 'test.ru'}]
    console.log(paragraphs)
    return (
        <React.Fragment>
            <div className="news-article-popup-background">
                <div className="news-article-popup-wrap">
                    <div className="news-article-popup-body">
                        <div className="news-article-date-wrap">
                            <span className="article-info-icon">
                                <img src={articleDate} alt="#" />
                            </span>
                            <span className="article-info-text-header">Дата публикации: 23.03.1989</span>
                        </div>
                        <div className="news-article-title-wrap">
                            <h1>{props.newsContent.title}</h1>
                        </div>
                        <BannerBlock 
                            banner={banner1}
                            altText={'test'}
                        />
                        <VideoBlock 
                            displayMode='textVideo'
                        />
                        {paragraphs && paragraphs.length > 0 ? 
                            <TextBlock 
                                paragraphContents={paragraphs}
                            />
                        : null}
                      
                        <LinksBlock 
                            links={links}
                        />
                        
                    </div>
                    <div className="news-article-popup-body-close-btn-wrap">
                        <Link 
                            className="news-article-popup-body-close-btn"
                            onClick={() => props.closeHandler(props.articleId)}
                        >Закрыть</Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default NewsArticle;