import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import CustomTmImgPopup from "./CustomTmImgPopup";

import { 
    showMoreTmItem,
    customTmLightbox
} from "../../redux/slices/innerPageSlice";

const CustomTm = () => {
    const dispatch = useDispatch();
    const customTmState = useSelector((state) => state.innerPage.customTmPage);

    const showMoreTmHandler = (tmItem) => {
        dispatch(showMoreTmItem({tmId: tmItem.id, tmName: tmItem.name}));
    };

    const lightboxImgHandler = (customTmId, customTmName, imageId, popupStatus) => {
        dispatch(customTmLightbox({tmId: customTmId, tmName: customTmName, imageId: imageId, status: popupStatus}));
    };
    

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="custom-tms-main-column">
                            {customTmState.tmItems.map((mainTmItem) => {
                                return (
                                    <React.Fragment key={mainTmItem.id}>
                                        <div className="custom-tm-main-item-row">
                                            <div className="custom-tm-item-content-wrap">
                                                <div className="custom-tm-item-description">
                                                    <h3>SM Professional</h3>
                                                    <p>Более <strong>100 профессиональных средств для специалистов</strong> индустрии красоты, 
                                                        которые решают основные эстетические проблемы кожи для всех возрастов и типов кожи. 
                                                        Продукция SM professional используются в медицинских клиниках и центрах пластической хирургии, салонах красоты, 
                                                        фитнес центрах.
                                                    </p>
                                                    <p>Продукты линии SM professional 
                                                        разработаны на основе широкого спектра природных 
                                                        компонентов в сочетании с последними достижениями биотехнологий.
                                                    </p>
                                                </div>
                                                <div className="custom-tm-more-btn-wrap">
                                                    <Link
                                                        className="custom-tm-more-btn" 
                                                        href="#" 
                                                        onClick={() => showMoreTmHandler(mainTmItem)}
                                                    >{mainTmItem.showMoreActive ? 'свернуть': 'подробнее'}</Link>
                                                </div>
                                                {mainTmItem.showMoreActive ? 
                                                    <React.Fragment>
                                                        <div className="custom-tm-more-content-wrap">
                                                            <div className="custom-tm-gallery-wrap">
                                                                <h3>Примеры продукции</h3>
                                                                 {mainTmItem.gallery.length > 0 ?
                                                                    <div className="custom-tm-galley-row">
                                                                        {mainTmItem.gallery.map((galleryItem) => {
                                                                            return (
                                                                                <React.Fragment key={`${mainTmItem.name}-gallery-item-${galleryItem.id}`}>
                                                                                    {galleryItem.popupActive ? 
                                                                                        <CustomTmImgPopup 
                                                                                            closeHandler={lightboxImgHandler}
                                                                                            galleryItem={galleryItem}
                                                                                            mainTmItem={mainTmItem}
                                                                                        /> 
                                                                                    : null}
                                                                                    <div
                                                                                        className="custom-tm-galley-item"
                                                                                    >
                                                                                        <Link 
                                                                                            onClick={() => 
                                                                                                lightboxImgHandler(
                                                                                                    mainTmItem.id,
                                                                                                    mainTmItem.name,
                                                                                                    galleryItem.id,
                                                                                                    true
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            <img src={galleryItem.minImg} alt={galleryItem.minImgAlt} />
                                                                                        </Link> 
                                                                                     </div>
                                                                                </React.Fragment> 
                                                                            )
                                                                        })}
                                                                    </div>
                                                                 : null}
                                                                
                                                            </div>
                                                            {mainTmItem.video && mainTmItem.video.file ? 
                                                                <div className="custom-tm-video-wrap">
                                                                    <h3>Промовидео</h3>
                                                                    <video controls>
                                                                        <source src={mainTmItem.video.file} type={mainTmItem.video.format} />
                                                                    </video>
                                                                </div>
                                                            : null}
                                                            
                                                        </div>
                                                    </React.Fragment>
                                                : null}  
                                            </div>

                                            <div className="custom-tm-item-stats">
                                                <div className="custom-tm-item-logo-row">
                                                    <div className="custom-tm-item-logo">
                                                        <img src={mainTmItem.logo.img} alt={mainTmItem.altImg} />
                                                    </div>
                                                </div>
                                                <div className="custom-tm-item-promo-row">
                                                    <div className="custom-tm-prezentation">
                                                        Презентация: 
                                                        <Link 
                                                            to={mainTmItem.prezentationFileUrl} 
                                                            target={mainTmItem.prezentationFileUrl}
                                                        >скачать</Link>
                                                    </div>
                                                    <div className="custom-tm-site">
                                                        Сайт: 
                                                        <Link 
                                                            to={mainTmItem.siteUrl} 
                                                            target={'_blank'}
                                                        >{mainTmItem.siteName}</Link>
                                                    </div> 
                                                </div>
                                    
                                            </div>
                                        </div>
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

export default CustomTm;