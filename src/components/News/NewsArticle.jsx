import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import articleDate from '../../img/articleDate.svg';
import VideoBlock from "./VideoBlock";
import BannerBlock from "./BannerBlock";
import TextBlock from "./TextBlock";
import LinksBlock from "./LinksBlock";


const NewsArticle = (props) => {
    const paragraphs = props.newsContent.paragraphs;
    const links = props.newsContent.links;
    const banners = props.newsContent.banners;
    const videos = props.newsContent.videos;

    return (
        <React.Fragment>
            <div className="news-article-popup-background">
                <div className="news-article-popup-wrap">
                    <div className="news-article-popup-body">
                        <div className="news-article-date-wrap">
                            <span className="article-info-icon">
                                <img src={articleDate} alt="#" />
                            </span>
                            <span className="article-info-text-header">Дата публикации: {props.newsDate}</span>
                        </div>
                        <div className="news-article-title-wrap">
                            <h1>{props.newsContent.title}</h1>
                        </div>

                        {banners && banners.length > 0 ? 
                            banners.map((banner) => {
                                return (
                                    <React.Fragment key={Math.random()}>
                                        <BannerBlock 
                                            banner={banner.img}
                                            altText={banner.alt}
                                        />
                                    </React.Fragment>
                                )
                            })
                        : null}
                        
                        {paragraphs && paragraphs.length > 0 ? 
                            <TextBlock 
                                paragraphContents={paragraphs}
                            />
                        : null}

                        {videos && videos.length > 0 ? 
                            videos.map((videoItem) => {
                                return (
                                    <React.Fragment key={Math.random()}>
                                        <VideoBlock 
                                            displayMode={videoItem.mode}
                                            videoUrl={videoItem.url}
                                            videoText={videoItem.text}
                                            videoTitle={videoItem.title}
                                        />
                                    </React.Fragment>
                                )
                            })
                        : null}
                      
                        {links && links.length > 0 ? 
                            <LinksBlock 
                                links={links}
                            />
                        : null}
                        
                        
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